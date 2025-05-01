const todoInput = document.getElementById('todo_input');
const addButton = document.getElementById('add_btn');
const todItemsContainer = document.getElementById('todo_items_container');

const deleteAllToDo = document.getElementById('delete_all')

addButton.addEventListener('click',() => {
    const value = todoInput.value;
    const li = document.createElement('li');
    li.innerText = value;
    const deleteButton = document.createElement('button');
    deleteButton.addEventListener('click',() => {
        li.remove();
    })
    deleteAllToDo.addEventListener('click',() => {
        li.remove();
    })
    deleteButton.innerText = 'x'
    if(todoInput.value != '') todItemsContainer.appendChild(li);
    li.appendChild(deleteButton);
    todoInput.value = '';
})