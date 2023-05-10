const calculator = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Cannot be divided by 0";
            } else {
                return num1 / num2;
            }
        case "%":
            return num1 % num2;
        default:
            return "Invalid Operator";
    }
}

const num1 = 6, num2 = 0, operator = "/";
console.log(`${num1} ${operator} ${num2} = ${calculator(num1, num2, operator)}`);