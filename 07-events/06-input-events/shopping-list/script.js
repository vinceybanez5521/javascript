const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

const onInput = e => {
  console.log(e.target.value);
}

const onCheck = e => {
  const isChecked = e.target.checked;

  if (isChecked) {
    console.log("Checked");
  } else {
    console.log("Not Checked");
  }
}

const onFocus = e => {
  console.log("input is focused");
  e.target.style.outlineStyle = "solid";
  e.target.style.outlineWidth = "1px";
  e.target.style.outlineColor = "green";
}

const onBlur = e => {
  console.log("input is not focused");
  e.target.style.outline = "none";
}

itemInput.addEventListener("input", onInput);
priorityInput.addEventListener("input", onInput);
// priorityInput.addEventListener("change", onInput);
checkbox.addEventListener("input", onCheck);

itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);