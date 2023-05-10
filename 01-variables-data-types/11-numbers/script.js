let x;
const num = 5.4527;
// const num = new Number(5);

x = num.toString();
x = num.toString().length;

x = num.toFixed(2); // decimal places
x = num.toPrecision(2); // round

x = num.toExponential(2);

x = num.toLocaleString('en-US');

x = num.valueOf();

// x = Number.MAX_VALUE;
// x = Number.MIN_VALUE;

// console.log(num, typeof num);
console.log(x);