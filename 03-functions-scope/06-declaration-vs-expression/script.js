console.log(addDollarSign(100)); // also accessible here bcoz of hoisting

// Function Declaration
function addDollarSign(value) {
    return "$" + value;
}

// console.log(addDollarSign(100));

// hoisting does not work with function expression
// console.log(addPlusSign(200));

// Function Expression
const addPlusSign = function (value) {
    return "+" + value;
};

console.log(addPlusSign(200));