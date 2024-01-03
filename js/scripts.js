const formTodo = document.querySelector(".todo");
const inputToDo = document.querySelector("#todo-list");

formTodo.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = inputToDo.value;
  console.log(inputValue);
});
