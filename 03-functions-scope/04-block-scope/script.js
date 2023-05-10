const x = 100;
const foo = 1;
var bar = 2;

if (true) {
    const y = 200;
    console.log(x + y);
}

// console.log(x + y); // error

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// console.log(i); // error

if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
}

// console.log(a); // error - a is block scope
// console.log(b); // error - b is block scope
console.log(c);

function run() {
    var d = 100;
    console.log(d);
}

run();
// console.log(d); // error - d is function scope