const onKeyDown = e => {
    const keyObj = {
        key: e.key === " " ? "Space" : e.key.toUpperCase(),
        keyCode: e.keyCode,
        code: e.code,
    }

    const result = document.querySelector(".result");
    result.innerHTML = "";

    const enteredDiv = document.createElement("div");
    enteredDiv.className = "entered";

    const h1 = document.createElement("h1");
    h1.innerText = keyObj.key;

    enteredDiv.appendChild(h1);


    const keysDiv = document.createElement("div");
    keysDiv.className = "keys";

    for (let key in keyObj) {
        const keyDiv = document.createElement("div");
        keyDiv.className = "key";

        const p = document.createElement("p");
        const h4 = document.createElement("h4");

        p.innerText = `e.${key}`;
        h4.innerText = keyObj[key];

        keyDiv.appendChild(p);
        keyDiv.appendChild(h4);

        keysDiv.appendChild(keyDiv);
    }

    result.appendChild(enteredDiv);
    result.appendChild(keysDiv);
}

window.addEventListener("keydown", onKeyDown);