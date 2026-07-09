// map() -> Transforms every element


const numbers = [1,2,3,4,5];

const squares = numbers.map((number)=>{
    return number*number;
});

console.log(numbers);
console.log(squares);



const numbers2 = [1,2,3,4,5];

const doubled = numbers2.map((number)=>{
    return number+number;
});

console.log(numbers2);
console.log(doubled);


const names = ["Saurabh", "Sharad", "Shalu"]

const uppernames = names.map((name)=>{
    return name.toUpperCase();
})

console.log(names);
console.log(uppernames);


const rates = [100, 250, 318, 400];

const finalRates = rates.map((rate)=>{
    return (((18/100)*rate) + rate);
})

console.log(rates);
console.log(finalRates);
