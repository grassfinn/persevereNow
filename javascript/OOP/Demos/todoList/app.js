const form = document.querySelector('form');
const submit = document.querySelector('button');
const userInput = document.querySelector('input');
const todoList = document.querySelector('ul');
let idNum = 0;

let todoArr = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = new Todo(idNum, userInput.value);
  idNum += 1;
  todoArr = [...todoArr, todo];
  Ui.displayData();
  Ui.clearInput();
  Ui.removeTodo();
});

class Todo {
  constructor(id, todo) {
    this.id = id;
    this.todo = todo;
  }
}

class Ui {
  static displayData() {
    let displayData = todoArr.map((item) => {
      return `
                <li class="list-item">
          <p class="list-content">
            ${item.todo}
          </p>
          <span class="remove">X</span>
        </li>
            `;
    });
    todoList.innerHTML = displayData.join(' ');
  }
  static clearInput() {
    userInput.value = '';
  }
  static removeTodo() {
    todoList.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove')) {
        e.target.parentElement.remove();
      }
      Ui.removeArrayTodo(id);
    });
  }
  static removeArrayTodo(id){
    todoArr = todoArr.filter(item => item.id !== +id)
    console.log(todoArr)
  }
}
