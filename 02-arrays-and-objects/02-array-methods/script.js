let x;

const arr = [34, 55, 95, 20, 15];

arr.push(100);
arr.pop();
arr.unshift(99);
arr.shift();
// arr.reverse();
// arr.sort();

x = arr.includes(20);
x = arr.indexOf(34);

x = arr.slice(1);
x = arr.slice(1, 4);

// x = arr.splice(1, 4);

// x = arr.splice(3, 1);

x = arr.splice(1, 4).reverse().toString().charAt(0);

// console.log(x, arr);
console.log(x);