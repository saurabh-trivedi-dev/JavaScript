const employees = [
    { id: 1, name: "Saurabh", salary: 50000, department: "IT" },
    { id: 2, name: "Rahul", salary: 45000, department: "HR" },
    { id: 3, name: "Aman", salary: 60000, department: "IT" },
    { id: 4, name: "Priya", salary: 70000, department: "Finance" },
    { id: 5, name: "Sharad", salary: 55000, department: "IT" }
];

const names = employees.map((employee)=>{
    return employee["name"];
});
console.log(names);


const itDept = employees.filter((employee)=>{
    return (employee["department"]==="IT");

})
console.log(itDept);


const totalSalary = employees.reduce((accum, currValue)=>{
    return accum+currValue['salary'];
}, 0);
console.log(totalSalary);


const incSalary = employees.map((employee)=>{
    return{
        ...employee,
        salary: (employee.salary*1.10)
    };
});
console.log(incSalary);
console.log(employees);