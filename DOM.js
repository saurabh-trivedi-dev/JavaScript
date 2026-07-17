const box = document.querySelector("#box");

box.addEventListener("click", (event) => {
    console.log("target:", event.target);
    console.log("currentTarget:", event.currentTarget);
});

