// document.getElementById()

console.log(document.getElementById("app-title"));
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);

// Get attributes
console.log(document.getElementById("app-title").getAttribute("id"));
console.log(document.getElementById("app-title").getAttribute("class"));

// Set attributes
document.getElementById("app-title").id = "new-id";
document.getElementById("new-id").title = "Shopping List";
document.getElementById("new-id").setAttribute("class", "title");

const title = document.getElementById("new-id");
console.log(title);

// Get/change content
console.log(title.textContent);
title.textContent = "Hello World!";
title.innerText = "Hello";
title.innerHTML = "<strong>Shopping List</strong>";

// Change styles
title.style.color = "red";
title.style.backgroundColor = "black";
title.style.padding = "10px";
title.style.borderRadius = "10px";

// document.querySelector()
console.log(document.querySelector("h1"));
console.log(document.querySelector("#new-id"));
console.log(document.querySelector("h1#new-id"));
console.log(document.querySelector(".title"));
console.log(document.querySelector("input[type='text']"));
console.log(document.querySelector("li:nth-child(2)"));
console.log(document.querySelector("li:nth-child(2)").innerText);

const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Apple Juice";
secondItem.style.color = "red";

// Use these methods on other elements
const list = document.querySelector("ul");
console.log(list);

const firstItem = list.querySelector("li");
firstItem.style.color = "blue";