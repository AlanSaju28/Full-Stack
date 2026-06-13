document.addEventListener("DOMContentLoaded",()=>{
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  // let tasks = []; // storing tasks in an array

  tasks.forEach(task => renderTask(task));

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim(); // trim is used for spaces after the text is completed when user submits

    if (taskText === "") return; // this is for when empty is passed then it simply returns back

    const newTask = {
      id: Date.now(), // it generates a unique id everytime new task is created
      text: taskText,
      completed: false,
    };
    saveTasks();
    tasks.push(newTask); // pushing the object newTask in to the array tasks
    todoInput.value = ""; // clear input
    console.log(tasks);
  });

  function renderTask(task) {
    console.log(task);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

})