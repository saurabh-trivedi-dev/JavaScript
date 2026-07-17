
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
