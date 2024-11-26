const inputTodo = document.getElementById('todoinput');
const addTodo = document.getElementById('btntodo');


//creating todo list items



addTodo.addEventListener('click' , (event) =>{
    event.preventDefault();

    let todoItem = inputTodo.value.trim();
    if(todoItem){
        inputTodo.style.border = '';
        console.log(`${todoItem}`)
    }
    else{
        inputTodo.style.border = '1px solid red'
    }
   
})

