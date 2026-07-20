// const student = {
//     name: "Saurabh",
//     age: 21,
//     course: "B.Tech",
//     isStudent: true
// };

// console.log(student['name']);
// console.log(student['course']);

// student['age'] = 22;

// student['city'] = "Lucknow";

// console.log(student['age']);
// console.log(student['city']);

// console.log(student);

// for (const key in student) {
//     console.log(key, student[key]);
// }



// const student1 = {
//     name: "Saurabh",
//     age: 21,
//     marks : [85,90,78,92]
// };

// function calculateAverage(student){
//     const marks = student1['marks'];
//     let count = marks.length;
//     const total = marks.reduce((accumulator, currValue)=>{
//         return (accumulator+currValue);
//     }, 0);
//     return (total/count);
// };

// console.log(calculateAverage(student1));



//Objects are Reference Types
const obj1 = {
    name:"Saurabh"
}

const obj2 = obj1
// obj2 is not a copy.
// Both variables point to the same object.

obj1.name = "Sharad"

console.log(obj1.name);
console.log(obj2.name);


//Creating a new copy using spread operator
const obj3 = {
    name: "Saurabh"
}

const obj4 = {...obj3}

obj4.name = "Sharad"

console.log(obj3.name);
console.log(obj4.name);



//Destructuring
const user5 = {
    name: "Shalu",
    age: 26,
    course: "B.ed"
}

const {name, age:userAge, course} = user5
console.log(name, userAge, course)



// ?(Optional Chaining)      If user exists, get name; otherwise return undefined
const user6 = null
// console.log(user6.name)               Errror
console.log(user6?.name)              // undefined




// Nullish Coalescing (??)
// Provides a default value only when the left side is null or undefined.

const user7 = null
console.log(user7 ?? "Default Name")

const user8 = "Ranjana"
console.log(user8 ?? "Default Name")


console.log(0 || 100);   //return 100 Because 0 is falsy
console.log(0 ?? 100);   //return 0 Because 0 is not null or undefined
