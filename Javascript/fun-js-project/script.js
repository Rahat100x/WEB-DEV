const addTaskBtn = document.getElementById('add-task-btn');

addTaskBtn.addEventListener('click', () => {
    const input = prompt('What is the task?')
    if(!input) return;

    const taskCard = document.createElement('p');
    taskCard.classList.add('item');
    taskCard.setAttribute('draggable',true);
    taskCard.innerText = input;
    const todoBoard = document.getElementById('todo-board');

    taskCard.addEventListener('dragstart',() => {
        taskCard.classList.add('flying');
    });
    taskCard.addEventListener('dragend', () => {
        taskCard.classList.remove('flying');
    });

    todoBoard.appendChild(taskCard);
});

const allBoard = document.querySelectorAll('.board');
const allItems = document.querySelectorAll('.item');

allItems.forEach(item => {
    item.addEventListener('dragstart', () => {
        item.classList.add('flying')
    });
    item.addEventListener('dragend', () => {
        item.classList.remove();
    });
});

allBoard.forEach(board => {
    board.addEventListener('dragover', () => {
        const flyingElement = document.querySelector('.flying');
        board.appendChild(flyingElement);
    });
});