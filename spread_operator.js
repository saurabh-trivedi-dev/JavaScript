
const person = {
    name: "Saurabh",
    age: 21
};

const updatedPerson = {
    ...person,
    name: "Sharad",
    age: 16
};

console.log(updatedPerson);


const person2 = {
    name: "Saurabh",
    age: 21
}

const updatedPerson2 = {
    ...person2,
    name: "Shalu",
    age: 26,
    class: "B.ed"
}

console.log(updatedPerson2);


const arr = [1,2,3,4,5,6,7,8,9,10]

const newArr = [...arr, 23,56,78]

console.log(newArr);


const clonePerson = {...person}

const clonePerson2 = {...person2, ...updatedPerson2}

console.log(clonePerson);
console.log(clonePerson2);


let max = Math.max(...arr)
console.log(max);