const add = function(n1, n2) {
    return n1 + n2;
}

const subtract = function(n1, n2) {
    return n1 - n2;
}

const multiply = function(n1, n2) {
    return n1 * n2;
}

const divide = function(n1, n2) {
    return n1 / n2;
}

const display = document.querySelector(".display");
const number = document.querySelector(".number");
const oper = document.querySelector(".operand");
const clear = document.querySelector(".clear")

function operate(a, b, fn){

    return fn(a, b);
}

clear.addEventListener("click", () => {
    clearDisplay();
});

function clearDisplay() {
    display.innerHTML = "0";
}