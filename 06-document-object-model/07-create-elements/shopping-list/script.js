const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element-id";
div.setAttribute("title", "My Element");

// div.innerText = "Hello World!";

const text = document.createTextNode("Hello World!");
div.appendChild(text);

// console.log(div);

// document.body.appendChild(div);

document.querySelector("ul").appendChild(div);