const promise1 = new Promise((resolve) => {
    resolve("Success");
});

promise1.then((result) => {
    console.log(result);
});


const promise2 = new Promise((resolve, reject) => {
    reject("Something went wrong");
});

promise2.catch((error) => {
    console.log(error);
});



const promise3 = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Data Loaded");
    } else {
        reject("Network Error");
    }

});

promise3
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Finished");
    });




const promise4 = new Promise((resolve, reject) => {
    console.log("Inside Promise");
    resolve("Done");
    console.log("After Resolve");
});

console.log("Outside Promise");

promise4.then((result) => {
    console.log(result);
});



console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");



console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

setTimeout(() => {
    console.log("4");
}, 0);

Promise.resolve().then(() => {
    console.log("5");
});

console.log("6");