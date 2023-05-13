let output;

const parent = document.querySelector(".parent");

output = parent.childNodes;
output = parent.childNodes[1];
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].innerText;
output = parent.childNodes[3].innerHTML;
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[3].innerText = "Child One";
output = parent.childNodes[5].style.color = "red";

output = parent.firstChild;

parent.lastChild.textContent = "Hello";

// Get parent node from a child node
const child = document.querySelector(".child");
output = child.parentNode;
child.parentNode.style.backgroundColor = "#ccc";
child.parentNode.style.padding = "10px";

// Siblings
const secondItem = document.querySelector(".child:nth-child(2)");
output = secondItem;
output = secondItem.nextSibling;
output = secondItem.nextSibling.nextSibling;

console.log(output);