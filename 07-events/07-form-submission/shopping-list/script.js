const form = document.querySelector("#item-form");

const onSubmit = (e) => {
  e.preventDefault();

  const item = document.querySelector("#item-input");
  const priority = document.querySelector("#priority-input");

  if (item === "" || priority === "0") {
    alert("Please fill in all fields");
    return;
  }

  console.log(item.value, priority.value);
}

const onSubmit2 = (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  // console.log(formData);
  const item = formData.get("item");
  const priority = formData.get("priority");

  const entries = formData.entries();

  // console.log(item, priority);

  for (let entry of entries) {
    console.log(entry[1]);
  }
}

form.addEventListener("submit", onSubmit2);