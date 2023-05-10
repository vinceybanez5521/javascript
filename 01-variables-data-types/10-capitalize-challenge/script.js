const myString = "developer";

let newString;

// Solution 1
newString = myString.charAt(0).toUpperCase() + myString.substring(1);

// Solution 2
newString = myString[0].toUpperCase() + myString.substring(1);

console.log(newString);