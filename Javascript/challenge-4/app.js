const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');

addButton.addEventListener('click',() => {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete'
    console.log(deleteBtn);
    
    li.className = 'task-item';
    console.log(taskInput.value);
    li.innerText = taskInput.value;
    taskList.appendChild(li);
    li.appendChild(deleteBtn)

    taskInput.value = '';
})

console.log('hello')