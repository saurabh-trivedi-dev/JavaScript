const student = {
    name: "Saurabh",
    age: 21,
    course: "B.Tech",
    isStudent: true
};

console.log(student['name']);
console.log(student['course']);

student['age'] = 22;

student['city'] = "Lucknow";

console.log(student['age']);
console.log(student['city']);

console.log(student);

for (const key in student) {
    console.log(key, student[key]);
}



const student1 = {
    name: "Saurabh",
    age: 21,
    marks : [85,90,78,92]
};

function calculateAverage(student){
    const marks = student1['marks'];
    let count = marks.length;
    const total = marks.reduce((accumulator, currValue)=>{
        return (accumulator+currValue);
    }, 0);
    return (total/count);
};

console.log(calculateAverage(student1));
