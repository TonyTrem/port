function loadTodos() {
    // get todos from local storage
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    // get todo list element
    const todoList = document.getElementById('todo-list');
    // clear todo list
    todoList.innerHTML = '';
    // loop through todos
    for (let todo of todos) {
        // create todo item
        const todoItem = document.createElement('li');
        // create todo text
        const todoText = document.createTextNode(todo);
        // append todo text to todo item
        todoItem.appendChild(todoText);
        // append todo item to todo list
        todoList.appendChild(todoItem);
    }
}

export { loadTodos };
