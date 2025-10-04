const inputTodo = document.getElementById('todoinput');
const addTodo = document.getElementById('btntodo');
const container = document.querySelector('.container')


let editMode = false;
let currentEditItem = null;

function loadTodo(){ 
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo =>{
        createTodoListItem(todo)
    });
}
function SaveTodo(){
    const allTodos = [];
    document.querySelectorAll('.todo-item').forEach(item =>{
        allTodos.push(item.textContent)
    });
    localStorage.setItem('todos', JSON.stringify(allTodos))
}

//creating todo list items
function createTodoListItem(task) {
    //creating todo list
    const todoList = document.createElement('div');
    todoList.className = 'todo-list';
    //creating tod items
    const todoItems = document.createElement('div');
    todoItems.textContent = task;
    todoItems.className = 'todo-item';
    //creating btn update
    const btnUpdate = document.createElement('button');
    btnUpdate.innerText = 'update'
    btnUpdate.className = 'btnUpdate';
    //creating btn delete
    const btnDelete = document.createElement('button');
    btnDelete.innerText = "delete";
    btnDelete.className = 'btnDelete';
    //append children
    todoList.appendChild(todoItems);
    todoList.appendChild(btnUpdate)
    todoList.appendChild(btnDelete)
    container.appendChild(todoList)

    btnDelete.addEventListener('click', () =>{
        todoList.remove();
        SaveTodo();
    })
    
    //update todo item
    btnUpdate.addEventListener("click", () =>{
        inputTodo.value = todoItems.textContent;
        addTodo.innerText = "Update";
        editMode = true;
        currentEditItem = todoItems;
    });
}


addTodo.addEventListener('click', (event) => {
    event.preventDefault();
    let todoItem = inputTodo.value.trim();

    if(!todoItem){
        inputTodo.style.border = '1px solid red';
        return
    }

    if (!editMode) {
        createTodoListItem(todoItem)
    }
    else {
        // console.log(`${todoItem}`)
        currentEditItem.textContent = todoItem;
        editMode = false;
        currentEditItem = null;
        addTodo.innerText = "Add";
    }

    SaveTodo();
    inputTodo.value = ""
    inputTodo.style.border = '';

})

//reset border error while starting typing
inputTodo.addEventListener("input", () =>{
    inputTodo.style.border ='';
})

//get todo items when page loads
window.addEventListener('DOMContentLoaded', loadTodo)

