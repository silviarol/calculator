function add(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    return numOne / numTwo;
}

const display = document.querySelector(".display");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

function operate(a, b, fn){
    return fn(a, b);
}

let displayValue = display.innerHTML;

let result = operate(1, 2, add);
display.innerHTML = result;