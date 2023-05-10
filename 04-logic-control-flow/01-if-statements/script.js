if (true) {
    console.log("This is true");
}

if (false) {
    console.log("This is false");
}

const x = 5, y = 10;

if (x >= y) {
    console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y) {
    console.log(`${x} is equal to ${y}`);
} else {
    console.log(`${x} is not equal to ${y}`);
}

if (x !== y) {
    const z = 20;
    console.log(`${z} is 20`);
}

// console.log(z);

// Shorthand If
if (x >= y)
    console.log(`${x} is greater than or equal to ${y}`),
        console.log("Hello")
else
    console.log("This is false");
