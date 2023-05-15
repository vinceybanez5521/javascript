const input = document.getElementById("item-input");

const onKeyPress = e => {
    console.log("keypress");
}

const onKeyUp = e => {
    console.log("keyup");
}

const onKeyDown = e => {
    // console.log("keydown"); 

    // key
    // console.log(e.key);
    // document.querySelector("h1").innerText = e.key;
    // if (e.key === "Enter") {
    //     alert("You press enter");
    // }

    // keyCode
    // https://www.toptal.com/developers/keycode/table-of-all-keycodes
    // if (e.keyCode === 13) {
    //     alert("You pressed enter");
    // }

    // code
    // console.log(e.code);
    // if (e.code === "Digit1") {
    //     console.log("You pressed 1");
    // }

    // repeat
    // check if user is holding a key
    // if (e.repeat) {
    //     console.log("You are holding down " + e.key);
    // }

    // shiftKey
    // console.log("Shift: " + e.shiftKey);
    // console.log("Ctrl: " + e.ctrlKey);
    // console.log("Alt: " + e.altKey);

    if (e.shiftKey && e.key === "A") {
        console.log("You hit shift + A");
    }
}

// input.addEventListener("keypress", onKeyPress);
// input.addEventListener("keyup", onKeyUp); // release key
input.addEventListener("keydown", onKeyDown); // hold key