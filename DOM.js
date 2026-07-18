const inputForm = document.querySelector('#inputForm');
const list = document.querySelector('#list');
const name = document.querySelector('#name');

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){
    list.innerHTML=""

    tasks.forEach((task)=>{
        const li = document.createElement('li');

        const taskspan = document.createElement('span')
        taskspan.textContent = task

        const delspan = document.createElement('span')
        delspan.textContent = "❌"
        delspan.classList.add("delete")

        li.appendChild(taskspan)
        li.appendChild(delspan)

        list.appendChild(li)
    })
}

renderTasks()

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = name.value.trim();

    if(!task){
        return;
    }
    
    tasks.push(task)

    localStorage.setItem("tasks", JSON.stringify(tasks))
    console.log(JSON.parse(localStorage.getItem("tasks")))
    renderTasks()

    name.value=""
    name.focus()

});


list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        const task = e.target.parentElement.firstElementChild.textContent;
        const index = tasks.indexOf(task);
        tasks.splice(index, 1);
        console.log(JSON.parse(localStorage.getItem("tasks")))
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
        return;
    }

    if (
        e.target.tagName === "SPAN" &&
        !e.target.classList.contains("delete")
    ) {
        e.target.classList.toggle("completed");
    }

});