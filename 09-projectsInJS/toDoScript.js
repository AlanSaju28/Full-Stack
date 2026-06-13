const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks = []; // storing tasks in an array

addTaskButton.addEventListener("click", () => {
  
  const taskText = todoInput.value.trim(); // trim is used for spaces after the text is completed when user submits 

  if (taskText === "") return; // this is for when empty is passed then it simply returns back

  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };
  tasks.push(newTask);
  todoInput.value = ""; // clear input
  console.log(tasks);
});
