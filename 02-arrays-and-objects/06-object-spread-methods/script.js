let x;

const todo = new Object();

todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;

x = todo;

const person = {
    address: {
        coords: {
            lat: 42.9384,
            lng: -71.3232
        }
    }
}

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
// const obj4 = Object.assign({}, obj1, obj2); // same as above

const todos = [
    { id: 1, name: "Buy milk" },
    { id: 2, name: "Pickup kids from school" },
    { id: 3, name: "Take out trash" }
]

x = todos;
x = todos[0];
x = todos[0].name;

x = Object.keys(todos);
x = Object.values(todos);
x = Object.keys(todos).length; // object properties length
x = Object.entries(todos);

x = todo.hasOwnProperty("id");

console.log(x);