// Values are store on the stack
const name = "John";
const age = 30;

// Reference values are stored on the heap
const person = {
    name: "Vince",
    age: 40
}

let newName = name;
newName = "Jonathan";

console.log(name, newName);

let newPerson = person;
newPerson.name = "Brad";

console.log(person, newPerson);