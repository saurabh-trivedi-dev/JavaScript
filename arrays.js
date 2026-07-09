const fruits = ["Grapes", "Mango", "Banana", "Kiwi", "Litchi"]

console.log(fruits[0]);

let length = fruits.length;
console.log(fruits[length-1]);

let index = fruits.indexOf("Mango");
fruits[index] = "Pineapple";

for(let i=0; i<length; i++){
    console.log(fruits[i])
}

for(let i=length-1; i>=0; i--){
    console.log(fruits[i])
}