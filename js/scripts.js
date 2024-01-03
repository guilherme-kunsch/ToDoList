const formTodo = document.querySelector(".todo");
const inputToDo = document.querySelector("#todo-list");
const result = document.querySelector("#result-todo");

const criaDiv = (tarefa) => {
  const inputValue = inputToDo.value;

  tarefa.classList.add("tarefa");
  tarefa.textContent = inputValue;

  //Div Pai chamada buttons
  const divPai = document.createElement("div")
  divPai.classList.add("buttons")
  tarefa.appendChild(divPai)

  //criando um botão de com icone de apagar
  const apagar = document.createElement("button")
  divPai.appendChild(apagar)

  const iconApagar = document.createElement("i")
  iconApagar.classList.add("fas", "fa-trash-alt");
  apagar.appendChild(iconApagar);

  //criando um botão de com icone de editar
  const edit = document.createElement("button");
  divPai.appendChild(edit)

  const icon = document.createElement("i")
  icon.classList.add("fas", "fa-pen-to-square");
  edit.appendChild(icon);

  tarefa.classList.add("mostrar");
  result.appendChild(tarefa);

  inputToDo.value = "";

}

formTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  // Create an element div for the new task
  const tarefa = document.createElement("div");
  criaDiv(tarefa);
});