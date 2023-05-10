// Loop through arrays
const items = ["book", "table", "chair", "kite"];
const users = [
    { name: "Vince" },
    { name: "John" },
    { name: "Steve" },
];

// for (let i = 0; i < items.length; i++) {
//     console.log(items[i]);
// }

// for (let item of items) {
//     console.log(item);
// }

for (let user of users) {
    console.log(user.name);
}

// Loop over strings
const str = "Hello World!";

for (let letter of str) {
    console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set("name", "John");
map.set("age", 30);

for (let [key, value] of map) {
    console.log(key, value);
}