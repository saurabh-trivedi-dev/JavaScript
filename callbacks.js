function greet(name) {
    console.log(`Hello ${name}!`);
}

function processUser(callback) {
    callback("Saurabh");
}
processUser(greet);



function greett(name) {
    console.log(`Hello ${name}!`);
}

function processUserr(callback) {
    console.log("Before callback");
    callback("Sharad");
    console.log("After callback");
}
processUserr(greett);



const calculate = (a,b,operation) => operation(a,b);

const add = (x,y) => x+y;
const multiply = (x,y) => x*y;
const subtract = (x,y) => x-y;
const divide = (x,y) => x/y;
const mod = (x,y) => x%y;

console.log(calculate(5, 3, multiply));
console.log(calculate(5, 3, mod));
console.log(calculate(5, 3, subtract));
console.log(calculate(5, 3, add));
console.log(calculate(5, 3, divide));