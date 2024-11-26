const inputTodo = document.getElementById('todoinput');
const addTodo = document.getElementById('btntodo');
const container = document.querySelector('.container')


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
    //passing elements parent elements
    container.appendChild(todoList).appendChild(todoItems);
    container.appendChild(todoList).appendChild(btnUpdate);
    container.appendChild(todoList).appendChild(btnDelete)


    deleteTodoItem();
    updateTodoItem();
}


//Delete Todo List Item
function deleteTodoItem() {
    let current_task = document.querySelectorAll('.btnDelete');
    current_task.forEach((tasks) => {
        tasks.addEventListener('click', (event) => {
            event.preventDefault();
            tasks.parentElement.remove();
        })
    })
}


//update Tod List Item
function updateTodoItem(){
    let updateItem = document.querySelectorAll('.btnUpdate');
    updateItem.forEach((item) =>{
        item.addEventListener('click' , (event) =>{
            event.preventDefault();
            let todoText = item.parentElement.querySelector('.todo-item').textContent;
            inputTodo.value = todoText;
        })
    })
}

addTodo.addEventListener('click', (event) => {
    event.preventDefault();

    let todoItem = inputTodo.value.trim();
    if (todoItem) {
        // console.log(`${todoItem}`)
        createTodoListItem(todoItem);
        inputTodo.value = ""
    }
    else {
        inputTodo.style.border = '1px solid red'
    }

})

