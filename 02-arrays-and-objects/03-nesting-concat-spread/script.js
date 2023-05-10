let x;

const fruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "raspberry"];

// fruits.push(berries);

// const allFruits = [fruits, berries];

// x = fruits[3][1]; // blueberry
// x = allFruits[1][0]; // strawberry

x = fruits.concat(berries);

// Spread operator (...)
x = [...fruits, ...berries];

// Flatten nested arrays into single array
const arr = [1, 2, [3, 4], 5, [6, 7], 8];

x = arr.flat();

// Static methods on array object
x = Array.isArray(arr);
x = Array.from("12345abcde"); // converts a string to array
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);