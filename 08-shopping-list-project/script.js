const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const clearBtn = document.querySelector("#clear");
const itemFilter = document.querySelector("#filter");
const formBtn = document.querySelector("button");
let isEditMode = false;

const addItem = (e) => {
    e.preventDefault();

    const newItem = itemInput.value;

    // Validate input
    if (newItem === "") {
        alert("Please add an item");
        return;
    }

    if (isEditMode) {
        const itemToEdit = document.querySelector(".edit-mode");
        removeFromLocalStorage(itemToEdit.textContent);
        itemToEdit.remove();
        isEditMode = false;
    }

    if (checkIfItemExists(newItem)) {
        alert("That item already exists!");
        return;
    }

    // Save item to localStorage
    addToLocalStorage(newItem);

    // Create list item
    addToDOM(newItem);

    itemInput.value = "";
    checkUI();
}

const addToDOM = (newItem) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(newItem));

    const button = document.createElement("button");
    button.className = "remove-item btn-link text-red";

    const icon = document.createElement("i");
    icon.className = "fa-solid fa-xmark";

    button.appendChild(icon);
    li.appendChild(button);

    itemList.appendChild(li);
}

const removeItem = (item) => {
    if (confirm("Are you sure you want to delete this?")) {
        item.remove();

        // Remove from localStorage
        removeFromLocalStorage(item.textContent);

        checkUI();
    }
}

const removeFromLocalStorage = (item) => {
    let itemsStorage = getItemStorage();
    itemsStorage = itemsStorage.filter(i => i !== item);
    localStorage.setItem("items", JSON.stringify(itemsStorage));
    checkUI();
}

const onClickItem = (e) => {
    if (e.target.tagName === "I") {
        removeItem(e.target.parentElement.parentElement);
    } else {
        setItemToEdit(e.target);
    }
}

const setItemToEdit = (item) => {
    isEditMode = true;

    itemList.querySelectorAll("li")
        .forEach(li => li.classList.remove("edit-mode"));

    item.classList.add("edit-mode");
    formBtn.innerHTML = "<i class='fas fa-pen'></i>  Update Item";
    formBtn.style.backgroundColor = "#228B22";
    itemInput.value = item.textContent;
}

const clearItems = (e) => {
    if (confirm("Are you sure you want to delete this?")) {
        // itemList.innerHTML = "";

        while (itemList.firstChild) {
            itemList.removeChild(itemList.firstChild);
        }

        // localStorage.clear();

        // Clear all items from localStorage
        localStorage.removeItem("items");
        checkUI();
    }
}

const checkUI = (e) => {
    itemInput.value = "";

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
        clearBtn.style.display = "none";
        itemFilter.style.display = "none";
    } else {
        clearBtn.style.display = "block";
        itemFilter.style.display = "block";
    }

    formBtn.innerHTML = "<i class='fas fa-plus'></i>  Add Item";
    formBtn.style.backgroundColor = "#333";
}

const filterItems = (e) => {
    const items = document.querySelectorAll("li");
    const text = e.target.value.toLowerCase();

    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if (itemName.indexOf(text) != -1) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}

const checkIfItemExists = (item) => {
    const itemsStorage = getItemStorage();
    return itemsStorage.includes(item);
}

const addToLocalStorage = (newItem) => {
    let itemStorage = getItemStorage();

    // Add new item to array
    itemStorage.push(newItem);

    // Convert to JSON string and set Local Storage
    localStorage.setItem("items", JSON.stringify(itemStorage));
}

const getItemStorage = () => {
    let itemStorage;

    if (localStorage.getItem("items") === null) {
        itemStorage = [];
    } else {
        itemStorage = JSON.parse(localStorage.getItem("items"));
    }

    return itemStorage;
}

const displayItems = () => {
    const itemsStorage = getItemStorage();

    itemsStorage.forEach(item => {
        addToDOM(item);
    });

    checkUI();
}

// Initialize app
const init = () => {
    // Event Listeners
    itemForm.addEventListener("submit", addItem);
    itemList.addEventListener("click", onClickItem);
    clearBtn.addEventListener("click", clearItems);
    itemFilter.addEventListener("input", filterItems);
    document.addEventListener("DOMContentLoaded", displayItems);

    checkUI();
}

init();

// localStorage.setItem("name", "Vince");
// console.log(localStorage.getItem("name"));
// localStorage.removeItem("name");
// localStorage.clear();