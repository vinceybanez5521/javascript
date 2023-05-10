// const email = "test@email.com";

// if (email) {
//     console.log("You passed in an email");
// }

// console.log(Boolean(email));

// Falsy Values:
// false
// 0
// "" or '' (Empty String)
// null
// undefined
// NaN

// Truthy Values
// Everything else that is not falsy
// true
// "0" (0 in a string)
// " " or (space in a string)
// "false" (false in a string)
// [] (empty array)
// {} (empty object)
// function() {} (empty function)

const x = function () {
    console.log("Hello");
};

if (x) {
    console.log("This is truthy");
} else {
    console.log("This is falsy");
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 0;

// if (children) {
if (children !== undefined) {
    console.log(`You have ${children} children`);
} else {
    console.log("Please enter number of children");
}

// Checking for empty arrays
const posts = ["Post One"];

// if (posts) {
if (posts.length > 0) {
    console.log("List Posts");
} else {
    console.log("No Posts To List");
}

// Checking for empty objects
const user = {
    // name: "John"
};

// if (user) {
if (Object.keys(user).length > 0) {
    console.log("List User");
} else {
    console.log("No User");
}

// Loose Equality (==)
console.log(false == 0);
console.log("" == 0);
console.log(null == undefined);
console.log(null === undefined);