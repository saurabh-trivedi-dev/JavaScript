// filter() -> returns only those elements which pass the condition


const numbers = [1,2,3,4,5,6,7,8,9,10];

const even = numbers.filter((number)=>{
    return (number%2===0);
})

console.log(numbers);
console.log(even);



const names = ["Saurabh", "Juggu", "Sharad", "Priyanka", "Shalu", "Ratan"]

const namesStartWithS = names.filter((name)=>{
    return (name[0] === "S");
})

console.log(names);
console.log(namesStartWithS);