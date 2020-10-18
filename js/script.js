"use strict";

let firstNum = +prompt ("Enter first number");
let secondNum = +prompt ("Enter second number");
let mathOperation = prompt ("Choose operation: \"+\", \"-\", \"*\", \"/\"");


const calculate = function(num1, num2, action, result) {
    num1 = firstNum;
    num2 = secondNum;
    action = mathOperation;

    if (action === "+") {
        result = num1 + num2;
    } else if (action === "-") {
        result = num1 - num2;
    } else if (action === "*") {
        result = num1 * num2;
    } else if (action === "/") {
        result = num1 / num2;
    }
    return result;
}

console.log(calculate());