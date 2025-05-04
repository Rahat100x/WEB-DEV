let addButton = document.getElementById("addButton");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let totalTasks = document.getElementById("totalTasks");
let completedTasks = document.getElementById("completedTasks");
let emptyList = document.querySelector(".empty-list");

let total = 0;
let completed = 0;
let emptyDesplay = "";

addButton.addEventListener("click", () => {
  if (taskInput.value.trim() === "" || taskInput.value === "") {
    alert("Wright somthin!");
    return;
  }
  const li = document.createElement("li");
  li.className = "task-item";
  li.innerHTML = `
        <div class="task-text">
            <input class="complete-checkbox" type="checkbox">
            <span class="item-text">${taskInput.value}</span>
        </div>
        <button class="delete-button">Delete</button>
    `;

  const checkbox = li.querySelector(".complete-checkbox");
  const litext = li.querySelector(".item-text");
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      litext.style.textDecoration = "line-through";
      completed++;
      updateTaskCounters();
      if (completed == total) {
        alert("Congratulations👍");
      }
    } else {
      litext.style.textDecoration = "none";
      completed--;
      updateTaskCounters();
    }
  });

  const deleteButton = li.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    li.remove();
    if (total === 1) {
      emptyDesplay = "block";
      emptyList.style.display = emptyDesplay;
      EmptyList();

      console.log(total);
    }
    total--;
    updateTotalTask();
  });
  emptyDesplay = "none";
  emptyList.style.display = emptyDesplay;
  EmptyList();
  taskList.appendChild(li);
  total++;
  updateTotalTask();

  taskInput.value = "";
});

function updateTotalTask() {
  totalTasks.innerText = `Total tasks: ${total}`;
}
function updateTaskCounters() {
  completedTasks.innerText = `Completed: ${completed}`;
}

function EmptyList() {
  emptyList.style.display = emptyDesplay;
}
