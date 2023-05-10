let x;

const person = {
    name: "John Doe",
    age: 30,
    isAdmin: true,
    "is Handsome": true,
    address: {
        street: "123 Main St",
        city: "Boston",
        state: "MA"
    },
    hobbies: ["music", "sports"]
};

x = person.name;
x = person["is Handsome"];
x = person.address.state;
x = person.hobbies;
x = person.hobbies[0];

// Update property
person.name = "Jane Doe";
person.isAdmin = false;

// Delete property
delete person.age;

// Add property
person.hasChildren = true;

person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}

person.greet();

x = person;

console.log(x);