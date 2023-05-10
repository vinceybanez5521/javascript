// This is a single line comment

console.log("Hello World!");
// console.log(100);
console.log(20, "Hello", true);

/*
// Multi-line comment
const x = 50;
console.log(x);

console.error("Error");
console.warn("Warning");
console.table({ name: "Vince", email: "vinceybanez5521@gmail.com" });
*/

console.group("Simple");
console.log("Hello World!");
console.log(100);
console.log(20, "Hello", true);
console.groupEnd();

const styles = "padding: 10px; background-color: white; color: green";

console.log("%cHello World!", styles);