const clearBtn = document.querySelector("#clear");

// clearBtn.onclick = function () {
//     alert("Clear Items");
// }

// addEventListener
// clearBtn.addEventListener("click", function () {
//     alert("Clear Items");
// });

// clearBtn.addEventListener("click", () => alert("Clear Items"));

clearBtn.addEventListener("click", clear);

function clear() {
    // alert("Clear Items")

    const itemList = document.querySelector("#item-list");
    // itemList.innerHTML = "";

    // const items = document.querySelectorAll("li");
    // items.forEach(item => item.remove());

    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

// removeEventListener
// setTimeout(() => clearBtn.removeEventListener("click", clear), 5000);

// Trigger event programmatically
// setTimeout(() => clearBtn.click(), 5000);

