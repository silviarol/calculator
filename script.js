let operator = null;
let num = [];
let n1 = "";
let n2 = "";
let displayed = "";
let str;

const display = document.querySelector(".display");
const oper = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const number = document.querySelectorAll(".number");
const equals = document.querySelector(".equals");
const btn = document.querySelectorAll(".button");

btn.forEach((button) => button.addEventListener("click", () => {
        
    display.textContent += button.innerHTML;

    displayed = display.innerHTML;

    let str = displayed;

    if (str.length == 3 && (str.charAt(1) == "+" || str.charAt(1) == "×" || str.charAt(1) == "÷" || str.charAt(1) == "-")) {
        n1 = str.charAt(0);
        n2 = str.charAt(2);
    } else if (str.length == 4 && (str.charAt(2) == "+" || str.charAt(2) == "×" || str.charAt(2) == "÷" || str.charAt(2) == "-")) {
        n1 = str.charAt(0) + str.charAt(1);
        n2 = str.charAt(3);
    } else if (str.length == 4 && (str.charAt(1) == "+" || str.charAt(1) == "×" || str.charAt(1) == "÷" || str.charAt(1) == "-")) {
        n1 = str.charAt(0);
        n2 = str.charAt(2) + str.charAt(3);
    } else if (str.length == 5 && (str.charAt(2) == "+" || str.charAt(2) == "×" || str.charAt(2) == "÷" || str.charAt(2) == "-")) {
        n1 = str.charAt(0) + str.charAt(1);
        n2 = str.charAt(3) + str.charAt(4);
    } else if (str.length > 5) {
        display.innerHTML = "ERROR";
    }

    checkOperator();

    equal(n1, n2);
})); 

function checkOperator() {
    
    if (str.indexOf('+') > -1) {
        operator = "+";
    } else if (str.indexOf('-') > -1) {
        operator = "-";
    } else if (str.indexOf('×') > -1) {
        operator = "×";
    } else if (str.indexOf('÷') > -1) {
        operator = "÷";
    }
}

function equal(n1, n2) {
    equals.addEventListener("click", () => {
        display.innerHTML = operate(n1, n2, operator);
    });
}

function operate(n1, n2, operator) {
    if (operator === "+") {
        a = Number(n1);
        b = Number(n2);
        return a + b;
    } else if (operator === "-") {
        a = Number(n1);
        b = Number(n2);
        return a - b;
    } else if (operator === "×") {
        a = Number(n1);
        b = Number(n2);
        return a * b;
    } else if (operator === "÷") {
        a = Number(n1);
        b = Number(n2);
        return a / b;
    }
}

clear.addEventListener("click", () => {
    clearDisplay();
});

function clearDisplay() {
    display.innerText = "";
    n1 = "";
    n2 = "";
}