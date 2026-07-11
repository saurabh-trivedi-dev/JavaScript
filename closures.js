function createMultiplier(multiplier) {
    function double(number){
        return number*multiplier;
    }
    return double;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));   // 10
console.log(double(10));  // 20

console.log(triple(5));   // 15
console.log(triple(8));   // 24





function createSubtractor(number1){
    function subtract(number2){
        return number2-number1;
    }
    return subtract
}

const subtract5 = createSubtractor(5);

console.log(subtract5(20));  //15



function outer() {
    let count = 0;

    return {
        increment() {
            count++;
        },

        decrement() {
            count--;
        },

        value() {
            return count;
        }
    };
}

const c = outer();

c.increment();
c.increment();
c.increment();
c.increment();

c.decrement();
c.decrement();
c.decrement();
c.decrement();
c.decrement();
c.decrement();
c.decrement();
c.decrement();

console.log(c.value());



function outerr() {
    let x = 10;

    return {
        add() {
            x += 5;
        },

        multiply() {
            x *= 2;
        },

        valuee() {
            return x;
        }
    };
}

const obj = outerr();

obj.add();

console.log(obj.valuee());

obj.multiply();

console.log(obj.valuee());

obj.add();

console.log(obj.valuee());



function createCounter() {
    let count = 0;

    return {
        increment() {
            return ++count;
        },

        reset() {
            count = 0;
        }
    };
}

const c1 = createCounter();
const c2 = createCounter();

console.log(c1.increment());

console.log(c1.increment());

c2.reset();

console.log(c2.increment());

console.log(c1.increment());
