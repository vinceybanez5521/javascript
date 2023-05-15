// Ways to declare a variable
// var, let, const

let firstName = "John";
let lastName = "Doe";

console.log(firstName, lastName);

let age = 30;
console.log(age);
// var age = 30;


// Naming conventions
// Only letters, numbers, underscores, and dollar signs
// Can't start with a number
// Use Camel Case for multi-word variables

// Re-assigning variables
age = 31;
console.log(age);

let score;
score = 1;
console.log(score);

if (true) {
    score = score + 1;
}

console.log(score);

const x = 100;
// x = 200;  // Uncaught TypeError: Assignment to constant variable.

const y = 25;

const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
    name: "Vince"
}

person.name = "John";
person.email = "john@gmail.com";
console.log(person);

// Declare multiple variables at once
let a, b, c;
const d = 10, e = 20, f = 30;

console.log(d);
console.log(a);