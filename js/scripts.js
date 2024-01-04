const formTodo = document.querySelector(".todo");
const inputToDo = document.querySelector("#todo-list");
const result = document.querySelector(".result-todo");

const criaDiv = (tarefa) => {
  const inputValue = inputToDo.value;

  tarefa.classList.add("tarefa");
  tarefa.textContent = inputValue;

  //Div Pai chamada buttons
  const divPai = document.createElement("div");
  divPai.classList.add("buttons");
  tarefa.appendChild(divPai);

  //criando um botão de com icone de apagar
  const apagar = document.createElement("button");
  apagar.classList.add("button_apagar");
  divPai.appendChild(apagar);

  const iconApagar = document.createElement("i");
  iconApagar.classList.add("fas", "fa-trash-alt");
  apagar.appendChild(iconApagar);

  //criando um botão de com icone de marcar como feito
  const feito = document.createElement("button");
  feito.classList.add("button_marcar");
  divPai.appendChild(feito);

  const iconFeito = document.createElement("i");
  iconFeito.classList.add("fas", "fa-check");
  feito.appendChild(iconFeito);

  tarefa.classList.add("mostrar");
  result.appendChild(tarefa);

  apagar.addEventListener("click", function () {
    tarefa.remove();
  });

  feito.addEventListener("click", function () {
    tarefa.classList.add("feita");
    result.appendChild(tarefa);
  });

  inputToDo.value = "";
};

formTodo.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputToDo.value.trim() === "") {
    alert("Digite sua tarefa");
    return;
  }

  const tarefa = document.createElement("div");
  criaDiv(tarefa);
});
