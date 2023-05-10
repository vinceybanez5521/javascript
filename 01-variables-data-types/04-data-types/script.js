// String
const firstName = "Sara";
console.log(firstName, typeof firstName);

// Number
const age = 30;
const temp = 98.9;
console.log(age, typeof age);
console.log(temp, typeof temp);

// Boolean
const hasKids = true;
console.log(hasKids, typeof hasKids);

// Null
const aptNumber = null;
console.log(aptNumber, typeof aptNumber);

// Undefined
let score;
score = undefined;
console.log(score, typeof score);

// Symbol
const id = Symbol('id');
console.log(id, typeof id);

// BigInt
const n = 1243425435435345n;
console.log(n, typeof n);

// Reference Types
const numbers = [1, 2, 3, 4];
console.log(numbers, typeof numbers);

const person = {
    name: "Vince"
};
console.log(person, typeof person);

function sayHello() {
    console.log("Hello");
}
console.log(sayHello, typeof sayHello);
