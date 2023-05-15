const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// listItems.forEach(item => {
//   item.addEventListener("click", function (e) {
//     // console.log(e.target);
//     e.target.remove();
//   });
// }); 

// Event delegation
list.addEventListener("click", (e) => {
  // console.log(e.target);

  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

list.addEventListener("mouseover", (e) => {
  // console.log(e.target);

  if (e.target.tagName === "LI") {
    e.target.style.color = "red";
  }
});

list.addEventListener("mouseout", (e) => {
  // console.log(e.target);

  if (e.target.tagName === "LI") {
    e.target.style.color = "black";
  }
});