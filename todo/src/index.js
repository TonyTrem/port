// apply stylesheet
import './style.css'

// once dom loads run this function
document.addEventListener('DOMContentLoaded', () => {
    // on click of add todo button run addTodo function
    document.getElementById('todo-button').addEventListener('click', addTodo);
    
    loadTodos();
});

// add todo
function addTodo() {
    // get todo input
    const todoInput = document.getElementById('todo-input');
    // get todo input value
    const todo = todoInput.value;
    // get todos from local storage
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    // add todo to todos
    todos.push(todo);
    // set todos in local storage
    localStorage.setItem('todos', JSON.stringify(todos));

    // clear todo input
    todoInput.value = '';

    // load todos
    loadTodos();
}

// load todos
function loadTodos() {
    // get todos from local storage
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    // get todo list element
    const todoList = document.getElementById('todo-list');
    // clear todo list
    todoList.innerHTML = '';
    // loop through todos
    for (let todo of todos) {
        // position of item in array
        const index = todos.indexOf(todo);
        // create todo item
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        todoItem.id = index;
        // create todo text
        const todoText = document.createTextNode(todo);
        // create remove todo button
        const removeTodoButton = document.createElement('button');
        removeTodoButton.classList.add('remove-todo-button');
        removeTodoButton.innerHTML = 'Remove';
        // on click of remove todo button run removeTodo function
        removeTodoButton.addEventListener('click', () => removeTodo(index));
        // append remove todo button to todo item
        todoItem.appendChild(removeTodoButton);
        // append todo text to todo item
        todoItem.appendChild(todoText);
        // append todo item to todo list
        todoList.appendChild(todoItem);
    }
}

// remove todos
function removeTodo(index) {
    // get todos from local storage
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    // remove todo from todos
    todos.splice(index, 1);
    // set todos in local storage
    localStorage.setItem('todos', JSON.stringify(todos));
    // load todos
    loadTodos();
}

function showsTodosInConsole() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    console.log(todos);
}

// Make the DIV element draggable:
dragElement(document.getElementByClass="todo-item");

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

export { showsTodosInConsole };
