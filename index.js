const inputTodo = document.getElementById('todoinput');
const addTodo = document.getElementById('btntodo');
const container = document.querySelector('.container')


//creating todo list items
function createTodoListItem(){

    //creating todo list
    const todoList = document.createElement('div');
    todoList.className ='todo-list';
    //creating tod items
    const todoItems = document.createElement('div');
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

}


addTodo.addEventListener('click' , (event) =>{
    event.preventDefault();

    let todoItem = inputTodo.value.trim();
    if(todoItem){
        inputTodo.style.border = '';
        // console.log(`${todoItem}`)
        createTodoListItem();
    }
    else{
        inputTodo.style.border = '1px solid red'
    }
   
})

