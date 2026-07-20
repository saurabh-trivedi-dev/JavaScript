
//map()   Creates a new array by transforming every element. 
const numbers = [1,2,3,4,5]
const result = numbers.map(number => number*2)
console.log(result)

// users.map(user => <User name={user.name} />)  React Example



//filter()   Returns elements that satisfy a condition.
const numbers2 = [1,2,3,4,5]
const result2 = numbers2.filter(number => number%2===0)
console.log(result2)



//find()    Returns the first matching element. 
// If nothing matches: undefined
const numbers3 = [2, 4, 6, 7, 8]
const answer = numbers3.find(number => number%2!==0)
const answer2 = numbers3.find(number => number%5===0)
console.log(answer)
console.log(answer2)



//some()    Returns true if at least one element matches
const numbers4 = [2, 4, 5, 8, 10]
const answer3 = numbers4.some(number => number%2!==0)
console.log(answer3)



//every()    Returns true if all elements match
const numbers5 = [2, 4, 6, 8, 10]
const answer4 = numbers5.every(number => number%2===0)
console.log(answer4)



//reduce()    Combines all elements into a single value
const numbers6 = [1, 2, 3, 4, 5]
const answer5 = numbers6.reduce((acc, curr) => acc+curr, 0)
console.log(answer5)





// ❌ Do NOT mutate
// ✅ map()
// ✅ filter()
// ✅ reduce()
// ✅ find()
// ✅ some()
// ✅ every()
// ✅ slice()
// ✅ concat()

// ✅ Mutate
// ⚠️ push()
// ⚠️ pop()
// ⚠️ shift()
// ⚠️ unshift()
// ⚠️ splice()
// ⚠️ sort() (by default, it sorts the original array)
// ⚠️ reverse()
// ⚠️ fill()



