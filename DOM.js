const heading = document.querySelector("#heading")
const toggle = document.querySelector("#toggle");
const body = document.querySelector("body");
let isDark = false;

toggle.addEventListener("click", ()=>{

    isDark = !isDark;

    if(isDark){
        body.style.backgroundColor = "black";
        heading.style.color = "white";
        toggle.textContent = "Light Mode!"
    }

    else{
        body.style.backgroundColor = "white";
        heading.style.color = "black";
        toggle.textContent = "Dark Mode!"
    }

});

