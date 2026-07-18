const inputForm = document.querySelector('#inputForm');
const list = document.querySelector('#list');
const name = document.querySelector('#name');
const all = document.querySelector('#all');
const active = document.querySelector('#active');
const completed = document.querySelector('#completed');
const search = document.querySelector('#search');

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function reloadStorage(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks(tasks);
}

function renderTasks(tasks){
    list.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.dataset.id = task.id;

        const taskspan = document.createElement("span");
        taskspan.textContent = task.task;

        if (task.completed) {
            taskspan.classList.add("completed");
        }

        const delspan = document.createElement("span");
        delspan.textContent = "❌";
        delspan.classList.add("delete");

        li.appendChild(taskspan);
        li.appendChild(delspan);

        list.appendChild(li);
    });
}
renderTasks(tasks)

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskText = name.value.trim();

    if(!taskText){
        return;
    }

    const newTask = {
        id: Date.now(),
        task: taskText,
        completed: false
    }
    
    tasks.push(newTask)

    reloadStorage()

    name.value=""
    name.focus()
});


list.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete")){
        const id = Number(e.target.parentElement.dataset.id);
        tasks = tasks.filter(task => task.id !== id);
        reloadStorage()
        return;
    }

    if(e.target.tagName === "SPAN" && !e.target.classList.contains("delete")){
        const id = Number(e.target.parentElement.dataset.id);
        const task = tasks.find(task => task.id === id);
        task.completed = !task.completed;
        reloadStorage()
        return;
    }
});


//Edit The Task
list.addEventListener("dblclick", (e) => {
    if (e.target.classList.contains("delete")) {
        return;
    }

    const id = Number(e.target.closest("li").dataset.id);
    const task = tasks.find(task => task.id === id);
    if (!task){
        return;
    }

    const newTask = prompt("Edit Task:", task.task);
    if (newTask === null || newTask.trim() === "") {
        return;
    }

    const updatedText = newTask.trim();

    if (updatedText === task.task) {
        return;
    }

    task.task = updatedText;
    reloadStorage()
});



let currentFilter = "all"
let searchText = ""

function updateView() {
    let tasksToRender = tasks;

    // Apply currentFilter
    if(currentFilter === "active"){
        tasksToRender = tasksToRender.filter(task=> !task.completed)
    }
    else if(currentFilter === "completed"){
        tasksToRender = tasksToRender.filter(task=> task.completed)
    }

    // Apply searchText
    if(searchText !== ""){
        tasksToRender = tasksToRender.filter(task => task.task.toLowerCase().includes(searchText.toLowerCase()))
    }

    renderTasks(tasksToRender)
}

search.addEventListener("input", (e)=>{
    searchText = e.target.value.trim()
    updateView()
})

all.addEventListener("click", ()=>{
    currentFilter = "all";
    updateView();
})

active.addEventListener("click", ()=>{
    currentFilter = "active"
    updateView()
})

completed.addEventListener("click", ()=>{
    currentFilter = "completed"
    updateView()
})




