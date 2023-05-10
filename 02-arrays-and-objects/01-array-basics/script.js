let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];

// Array Constructor
const fruits = new Array("apple", "grape", "orange");

const mixed = [12, "Hello", true, null];

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is ${fruits[2]}`;

x = numbers.length;

fruits[2] = "pears";
x = fruits;

// fruits.length = 2;
// x = fruits;

fruits[3] = "strawberry";
fruits[fruits.length] = "blueberry";
fruits[fruits.length] = "peach";
x = fruits;

console.log(x);