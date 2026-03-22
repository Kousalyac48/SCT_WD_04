let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(){
let list = document.getElementById("taskList");
list.innerHTML = "";

tasks.forEach((task,index)=>{

let li = document.createElement("li");

// Apply priority color
li.classList.add(task.priority.toLowerCase());

li.innerHTML = `
<div class="task-info ${task.completed ? "completed" : ""}">
<span id="task-text-${index}">${task.text}</span>
<small>${task.date} ${task.time} | ${task.priority}</small>
</div>

<div class="task-buttons">

<button class="complete-btn" onclick="toggleComplete(${index})">✔</button>

<button class="edit-btn" onclick="editTask(${index})">✏</button>

<button class="delete-btn" onclick="deleteTask(${index})">🗑</button>

</div>
`;

list.appendChild(li);
});
}

function addTask(){

let text = document.getElementById("taskInput").value;
let date = document.getElementById("taskDate").value;
let time = document.getElementById("taskTime").value;
let priority = document.getElementById("taskPriority").value;

if(text === ""){
alert("Please enter a task");
return;
}

tasks.push({
text:text,
date:date,
time:time,
priority:priority,
completed:false
});

saveTasks();
renderTasks();

document.getElementById("taskInput").value="";
}

function deleteTask(index){
tasks.splice(index,1);
saveTasks();
renderTasks();
}

function toggleComplete(index){
tasks[index].completed = !tasks[index].completed;
saveTasks();
renderTasks();
}

function editTask(index){

let textElement = document.getElementById(`task-text-${index}`);
let currentText = tasks[index].text;

textElement.innerHTML = `
<input type="text" id="edit-input-${index}" value="${currentText}">
<button onclick="saveEdit(${index})">Save</button>
`;
}

function saveEdit(index){

let newText = document.getElementById(`edit-input-${index}`).value;

if(newText.trim() === ""){
alert("Task cannot be empty");
return;
}

tasks[index].text = newText;

saveTasks();
renderTasks();
}

function checkReminders(){
let now = new Date();

tasks.forEach((task)=>{
if(task.date && task.time && !task.completed){

let taskDateTime = new Date(`${task.date}T${task.time}`);
let diff = taskDateTime - now;

// Reminder within 1 minute
if(diff > 0 && diff < 60000){
alert(`⏰ Reminder: ${task.text}`);
}
}
});
}

// Check every 30 seconds
setInterval(checkReminders, 30000);

renderTasks();