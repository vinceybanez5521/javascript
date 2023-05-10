// Challenge 1
const getCelsius = farenheit => (farenheit - 32) * (5 / 9);
console.log(`The temperature is ${getCelsius(64).toFixed(2)} \xB0C`);

// Challenge 2
const minMax = (numbers) => ({
    min: Math.min(...numbers),
    max: Math.max(...numbers),
});

const min = minMax([1, 2, 3, 4, 5]).min;
const max = minMax([1, 2, 3, 4, 5]).max;

console.log(`The minimum number is ${min} and the maximum number is ${max}`);

// Challenge 3
((length, width) => {
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${length * width}.`);
})(10, 50);