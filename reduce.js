// reduce() -> Reduces the array to a single element


const numbers = [10,20,30,40];

const sum = numbers.reduce((accumulator, currValue)=>{
    return accumulator+currValue;
}, 0);

console.log(sum);



const numbers2 = [2,3,4,5];

const product = numbers2.reduce((accumulator, currValue)=>{
    return accumulator*currValue;
}, 1);

console.log(product);