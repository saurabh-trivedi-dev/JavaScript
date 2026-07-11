const student = {
    name: "Saurabh",
    age: 21,
    city: "Lucknow",
    course: "B.Tech"
};

const {name, city} = student;
console.log(name);
console.log(city);


const numbers = [10,20,30,40,50];
const [first, second, third] = numbers;
console.log(first);
console.log(second);
console.log(third);

const [index1, ...rest] = numbers;
console.log(rest);


const employee = {
    name: "Rahul",
    salary: 50000
};

const {name:employeeName, salary:employeeSalary} = employee;
console.log(employeeName);
console.log(employeeSalary);



const person = {
    name : "Saurabh"
};

const company = {
    name : "HCLTech"
};

const {name:personName} = person;
const {name:companyName} = company;

console.log(`${personName} works at ${companyName}`)



const user = {
    name : "Tanish"
};

const {name:username, age=21} = user;
console.log(username);
console.log(age);



const student1 = {
    name: "Vaibhav",
    address: {
        city: "Lucknow",
        state: "UP",
        locality: {
            homeNum : 266,
            homeName : "Aurora"
        }
    }
};

const {name:student1Name, address:{city:cityname,state, locality:{homeName, homeNum}}} = student1;
console.log(student1Name);
console.log(cityname);
console.log(homeName);
