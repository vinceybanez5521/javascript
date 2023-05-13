const li = document.createElement("li");
li.textContent = "Insert Me After";

const firstItem = document.querySelector("li:first-child");

function insertAfter(newEl, existingElement) {
    const parent = existingElement.parentElement;
    const nextElementSibling = existingElement.nextElementSibling;
    parent.insertBefore(newEl, nextElementSibling);
}

insertAfter(li, firstItem);