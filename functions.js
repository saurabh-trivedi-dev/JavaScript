const greet = function(name){
    console.log(`Hello ${name}`)
}
greet("Saurabh")


const multiply = function(num1, num2){
    let result = num1*num2;
    return result;
}
let result = multiply(5,3);
console.log(result);


function isEven(number){
    if(number%2==0){
        return true;
    }
    return false;
}
let result1 = isEven(35);
let result2 = isEven(34);
console.log(result1);
console.log(result2);


function findLargest(num1, num2){
    if(num1>num2){
        return num1;
    }
    else if(num2>num1){
        return num2;
    }
    return "Equal";
}
let largest = findLargest(7,7);
console.log(largest);


function squaree(num){
    return res = num*num;
}
let square = squaree(5);
console.log(square);


function isPositive(num){
    if(num==0){
        return "Zero";
    }
    else if(num>0){
        return "Positive";
    }
    return "Negative";
}
console.log(isPositive(-3));


function countVowels(str){
    str = str.toUpperCase();
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i]=="A" || str[i]=="E" || str[i]=="I" || str[i]=="O" || str[i]=="U"){
            count +=1;
        }
    }
    return count;
}
console.log(countVowels("Saurabh"));


function reverseString(str){
    let revstr="";
    for(let i=0; i<str.length; i++){
        revstr = str[i] + revstr;
    }
    return revstr;
}
console.log(reverseString("Saurabh"));


const greeting = (name)=>{
    console.log(`Hello ${name}`)
}
greeting("Saurabh")


const multiplyy = (num1, num2)=>{
    let result = num1*num2;
    return result;
}
let resultt = multiplyy(5,3);
console.log(resultt);



function greetss() {
    console.log("Hello");
}

function execute(func) {
    func();
}

execute(greetss());