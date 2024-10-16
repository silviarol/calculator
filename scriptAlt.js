/* NOT IMPLEMENTED IN THE APP! THIS IS AN
ALTERNATIVE JS FILE THAT STILL NEEDS SOME WORK


let n1 = null;
let n2 = null
let operator = null;
let result = null;
let displayedValue = "";
let maxCapacity = 7;

const clear = document.querySelector(".clear");
const deleter = document.querySelector(".delete");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");

clear.addEventListener("click", clearDisplay);

deleter.addEventListener('click', () => {
    let str;
    str = display.innerHTML;
    display.innerHTML = str.slice(0, -1);
});

equals.addEventListener('click', () => {
    if (n1 != null && operator != null) {
        n2 = parseFloat(displayedValue);
        display.innerHTML = n2;
        result = operate(n1, n2, operator);
        display.innerHTML = Math.round(result * 100) / 100;
        n1 = Math.round(result * 100) / 100;
        resetValues();
    }
});

numberBtn.forEach((button) => {
    button.addEventListener("click", updateDisplay);
});

operatorBtn.forEach((button) => {
    button.addEventListener("click", operatorSelection);
});

function clearDisplay() {
    n1 = null;
    resetValues();
    display.innerHTML = "";
}

function operatorSelection(event) {

    if (n1 == null) {
        n1 = parseFloat(displayedValue);
        operator = event.target.innerHTML;
        displayedValue = "";
        display.innerHTML = "";
    } else if (n1 != null && operator != null) {    
        n2 = parseFloat(displayedValue);
        display.innerHTML = n2;
        result = operate(n1, n2, operator);
        display.innerHTML = Math.round(result * 100) / 100;
        n1 = display.innerHTML;
        resetValues();
    }
}

function operate(n1, n2, operator) {

    switch (operator) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "×":
            return n1 * n2;
        case "÷":
            return n2 === 0 ? "ERROR" : n1 / n2;
        default:
            return "ERROR";
    }
}

function resetValues() {
    n2 = null;
    operator = null;
    displayedValue = "";
} 

function updateDisplay(event) {

    if (display.innerHTML.length < maxCapacity) {
        display.innerHTML += event.target.innerHTML;
        displayedValue = display.innerHTML;
    } else {
        display.innerHTML = "*ERROR*";
    }
} */