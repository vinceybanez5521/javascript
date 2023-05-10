let x;

const name = "John";
const age = 30;

// Concatenation
x = "Hello, my name is " + name + " and I am " + age + " years old.";

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old.`;

// String Properties and Methods
const s = "Hello World";
// const s = new String("Hello World");

x = s.length;
// x = typeof s;

// Access value by index
x = s[1];

// x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf("d");

x = s.substring(0, 4); // start, end
x = s.substring(5); // start
x = s.substring(0, 5); // start, end
x = s.slice(-11, -6); // -start, -end

// x = "            Hello World        ";
// x = s.trim();
// console.log(x.length);

// x = s.replace('World', 'John');

// x = s.includes('Hello');

// x = s.valueOf();

// x = s.split("");

console.log(x);