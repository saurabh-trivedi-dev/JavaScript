fetchData()
    .then((data)=>{
        return processData(data);
    })
    .then((data)=>{
        return saveData(data);
    })
    .catch((error)=>{
        console.log(error);
    });



async function run(){
    try{
        const data = await fetchData();
        const result = await processData(data);
        await saveData(result);
    }
    catch(error){
        console.log(error);
    }
}



function getNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 3000);
    });
}

function getNumber2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(20);
        }, 1000);
    });
}

async function main() {
    console.log("Start");

    const value = await getNumber();
    
    console.log(value);
    console.log("Main End!");

    
}

main();

for(let i=0; i<10; i++){
    console.log("In Loop")
}

const value2 = await getNumber2();
    
console.log(value2);

console.log("Outside");



async function test() {
    console.log("A");

    await Promise.resolve();

    console.log("B");
}

console.log("1");

test();

console.log("2");



console.log("1");

Promise.resolve().then(() => {
    console.log("first in promise priority");
});

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

(async function () {
    console.log("4");

    await Promise.resolve();

    console.log("5");

    await Promise.resolve();

    console.log("before any settimeout even 0ms ones");
})();

console.log("6");