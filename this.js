
//this depends on how a function is called, NOT where it is written
const user = {
    name: "Saurabh",
    greet(){
        console.log(this.name)
    }
}

user.greet()

const fn = user.greet
fn()



//call() = "Run this function with this object"
//function.call.object
const user2 = {
    name:"Sharad"
}

function greet(){
    console.log(this.name)
}

greet.call(user2)



//apply() = "Run this function with this object, with arguments in the array"
//function.apply.object
const user3 = {
    name: "Shalu"
}

function greeting(city, age){
    console.log(this.name, city, age)
}

greeting.apply(user3, ["Lucknow", 21])


//Nowadays, you'll rarely use apply() because of the spread operator
const args = ["Lucknow", 21];
greeting.call(user3, ...args);



//bind() = "Returns a new function with this permanently bound"
//function.bind.object returns a function that needs to be called
const user4 = {
    name: "Ratan"
}

function userName(){
    console.log(this.name)
}

const func = userName.bind(user4)
func()



// this → Mostly when reading older React class components.
// bind() → Sometimes in older codebases.
// call() and apply() → Rare in day-to-day React.