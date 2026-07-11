//Global Scope

const name = "Tanish";
function greet(){
    console.log(`Hello ${name}`);
}
greet();


let x = 10;
function show() {
    console.log(x);
}
show();



//Local Scope

function greeting(){
    const message="Hey There!";
    console.log(message);
}
greeting();
// console.log(message);   //ReferenceError: message is not defined


function show(){
    let y = 20;
    console.log(y);
}
show();
// console.log(y);          //ReferenceError: y is not defined



//Here the output will be 10 and 5
//the function print 10, that is local scope
//the global one print 5
let a = 5;
function test() {
    let a = 10;
    console.log(a);
}
test();
console.log(a);




//Here the output will be 10 and 10
//In the function global b is overwritten from 5 to 10
//So, the global b also prints 10
let b = 5;
function test2() {
    b = 10;
    console.log(b);
}
test2();
console.log(b);



