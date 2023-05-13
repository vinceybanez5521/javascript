// console.log(window);
// console.log(window.document);
// console.dir(window.document);

// console.log(document);
// console.log(document.body);
// console.log(document.body.innerHTML);
// console.log(document.body.innerText);

// console.dir(document);
console.log(document.links[0]);

// document.body.innerHTML = "<h1>Hello World!</h1>";

// document.write("Hello from JS");

console.log(document.getElementById("main"));

const main = document.getElementById("main");
main.innerHTML = "<h1>Hello from main</h1>";

console.log(document.querySelector("#main"));
const h1 = document.querySelector("#main h1");
h1.innerText = "Hello";