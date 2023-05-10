// alert("Hello");
// console.log(window.innerWidth);
// console.log(innerWidth);

const x = 100;

console.log(x, "in global");

function run() {
    console.log(window.innerHeight);
    console.log(x, "in function");
}

run();

if (true) {
    console.log(x, "in block");
}

function add() {
    const x = 1; // overrides the x in global scope
    const y = 50;
    // console.log(y);
    console.log(x + y);
}

// console.log(y); // Uncaught references: y is not defined

add();