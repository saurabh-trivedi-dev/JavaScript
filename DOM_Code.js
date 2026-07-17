
//Rain Audio & Random BG
const body = document.querySelector("body");
const music = new Audio("audio.mp3");
music.loop = true;
music.play();

function randomBG(){
    const red = Math.round((Math.random()*255));
    const green = Math.round((Math.random()*255));
    const blue = Math.round((Math.random()*255));

    const color = `rgb(${red},${green},${blue})`;

    body.style.backgroundColor = color;
}

setInterval(()=>{
    randomBG()
}, 100)



//Change BG Color On Click
const body = document.querySelector("body");
const divs = document.querySelectorAll(".div")

function changeBG(color){
    body.style.backgroundColor = color;
}

divs.forEach((div)=>{
    div.addEventListener("click", ()=>{
        changeBG(div.textContent);
    })
})



// Add and Remoce Paragraphs In A Div(Create, Modify, Delete)
const container = document.querySelector("#container")
const add = document.querySelector("#adding")
const remove = document.querySelector("#remove")

add.addEventListener("click", ()=>{
    const paragraph = document.createElement("p")
    paragraph.textContent = "Hello World!"
    container.appendChild(paragraph)
})

remove.addEventListener("click", ()=>{
    const lastelem = container.lastElementChild
    if(lastelem){
        lastelem.remove()
    }
})



//Event Bubbling
const outer = document.querySelector("#outer")
const middle = document.querySelector("#middle")
const inner = document.querySelector("#inner")

outer.addEventListener("click", () => {
    console.log("Outer");
});

middle.addEventListener("click", (event) => {
    console.log("Middle");
});

inner.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Button");
});



//Event Delegation(1 Event Listener, 1000 Items)
const list = document.querySelector("#list")

list.addEventListener("click", (event)=>{
    console.log(event.target.textContent);
})

const li = document.createElement("li");
li.textContent = "Apple";
list.appendChild(li);


//Forms
const username = document.querySelector("#username")
const inputForm = document.querySelector("#inputForm")

inputForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const name = username.value.trim()
    if(name){
        console.log(name)
    }
    else{
        console.log("Error :: Enter the username")
    }
    username.value=""
    username.focus()
})


//Mini To-Do
const inputForm = document.querySelector("#inputForm")
const list = document.querySelector("#list")
const name = document.querySelector("#name")

inputForm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const liName = name.value.trim()

    if(liName){
        const liItem = document.createElement("li")
        liItem.textContent = liName
        list.appendChild(liItem)
    }

    name.value = ""
    name.focus()
})

list.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.remove();
    }
});