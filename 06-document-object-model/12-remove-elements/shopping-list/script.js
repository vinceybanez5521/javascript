function removeClearBtn() {
    const clearBtn = document.querySelector("#clear");
    clearBtn.remove();
}

function removeFirstItem() {
    const ul = document.querySelector("ul");
    const li = document.querySelector("li:first-child");

    ul.removeChild(li);
}

function removeItem(itemNumber) {
    const ul = document.querySelector("ul");
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
    ul.removeChild(li);
}

function removeItem2(itemNumber) {
    const ul = document.querySelector("ul");
    const li = document.querySelectorAll("li")[itemNumber];
    ul.removeChild(li);
}

removeClearBtn();
removeFirstItem();
removeItem(1);
removeItem2(0);