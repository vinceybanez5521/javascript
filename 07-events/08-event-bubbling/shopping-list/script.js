const button = document.querySelector("form button");
const div = document.querySelector("form div:nth-of-type(2)");
const form = document.querySelector("form");

console.log(div.innerHTML);

button.addEventListener("click", function (e) {
  console.log("The button was clicked");
  e.stopPropagation(); // stop event bubbling
});

div.addEventListener("click", function (e) {
  alert("Div was clicked");
});

form.addEventListener("click", function (e) {
  alert("Form was clicked");
});

document.body.addEventListener("click", function (e) {
  alert("Body was clicked");
});