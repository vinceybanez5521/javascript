const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = itemList.querySelectorAll("li");

const btn = document.querySelector("button");
btn.onclick = run;

function run() {
  // className
  // console.log(itemList.className);
  // text.className = "card dark";

  // classList
  // console.log(itemList.classList);
  // itemList.classList.forEach(c => console.log(c));

  // text.classList.add("dark");
  // text.classList.remove("card");

  // text.classList.toggle("dark");
  // text.classList.toggle("hidden");
  text.classList.replace("card", "dark");

  itemList.style.lineHeight = "3";

  items.forEach(item => item.style.color = "red");
}