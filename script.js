document.addEventListener("DOMContentLoaded", () => {
  let todoInput = document.getElementById("todo-input");
  let addTaskButton = document.getElementById("add-task-btn");
  let todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.forEach(task => renderTask(task));
  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    let newTask = {
      id: Date.now(),
      text: todoInput.value,
      completed: false,
    };
    tasks.push(newTask);
    saveTask();
    todoInput.value = ""; // clear input
  });

  function renderTask(task) {
    const li = document.createElement('li');
    li.setAttribute('data-id', task.id)
    li.innerHTML = `${task.text} <button>delete</button></>`
    todoList.appendChild(li);
  }

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTask();
  }
});