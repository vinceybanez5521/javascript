// window.onload = () => {
//   document.querySelector("h1").textContent = "Hello World!";
// }

window.addEventListener("load", function () {
  console.log("Page Loaded");
});

window.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Loaded");

  if (window.scrollY > 70) {
    document.querySelector("a").style.display = "inline-block";
  } else {
    document.querySelector("a").style.display = "none";
  }
});

console.log("Run me");

document.querySelector("h1").innerText = "Hello World!";

window.addEventListener("resize", function () {
  document.querySelector("h1").innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

window.addEventListener("scroll", function () {
  // console.log(`Scolled: ${window.scrollX} x ${window.scrollY}`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.querySelector("a").style.display = "inline-block";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.querySelector("a").style.display = "none";
  }
});

window.addEventListener("focus", function () {
  document.querySelectorAll("p").forEach(p => {
    p.style.color = "blue";
  });
});

window.addEventListener("blur", function () {
  document.querySelectorAll("p").forEach(p => {
    p.style.color = "black";
  });
});