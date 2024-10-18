let operator = "";
let n1 = "";
let n2 = "";
let operands = ["", ""];
let operators = [""];
operands.length = 2;
operators.length = 1;
const fixedArray = operands.length;
const fixedArrayTwo = operators.length;
let result = "";
let array = [];
const displayMaxLength = 7;

const btn = document.querySelectorAll(".number, .operator, .point");
const decimal = document.querySelector(".point");
const negative = document.querySelector(".negative");
const clear = document.querySelector(".clear");
const deleter = document.querySelector(".delete");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");

numberBtn.forEach((button) => button.addEventListener("click", (event) => {    
    
    display.textContent += event.target.innerHTML;
    
    if (operator != "") {   
        display.textContent = "";
        display.textContent += event.target.innerHTML;
        array.push(display.textContent);
        let secondNumber = array.join("");
        display.textContent = secondNumber;
    }

})); 

operatorBtn.forEach((button) => button.addEventListener("click", (event) => {
        
    if (n1 == "" && operator == "") {
        n1 = display.textContent;
        operator = event.target.innerHTML;
        operands[0] = n1;
        operators[0] = operator;
    } else if (n1 != "" && operator != "") {   
        n2 = display.textContent;
        operands[1] = n2;
        operators[0] = "";
        operator = event.target.innerHTML;
        operators[0] = operator;
    } else if (n1 == result) {   
        n2 = display.textContent;
        operands[1] = n2;
        operators[0] = "";
        operator = event.target.innerHTML;
        operators[0] = operator;
    }

})); 

function operate(n1, n2, operator) {
    
    const a = parseFloat(n1);
    const b = parseFloat(n2);

    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "×":
            return a * b;
        case "÷":
            return b === 0 ? "ERROR!!" : a / b;
        default:
            return "ERROR!!";
    }
}

equals.addEventListener("click", () => {
    if (n1 == "" && operator == "") {
        display.innerHTML = "ERROR!!";
    } else if (n1 != "" && operator == "") {
        display.innerHTML = "ERROR!!";
    } else {
        n2 = display.textContent;
        result = operate(n1, n2, operator);
        display.innerHTML = result;
        display.innerHTML = Math.round(result * 100) / 100;
        n1 = result;
        operands[0] = n1;
        operators[0] = "";
        array = [];
        operands[1] = "";
    }

});

decimal.addEventListener("click", () => {
    display.textContent += ".";
});

clear.addEventListener("click", () => {
    clearDisplay();
});

function clearDisplay() {
    display.innerText = "";
    n1 = "";
    n2 = "";
    operator = "";
    operands[0] = "";
    operands[1] = "";
    operators[0] = "";
    array = [];
}

deleter.addEventListener('click', () => {
    const currentDisplay = display.innerHTML;
    result = operate(n1, n2, operator);

    if (result != "") {
        display.innerHTML = currentDisplay.slice(0, -1);
        n1 = currentDisplay.slice(0, -1);  
        operands[0] = n1; 
    } else {
        display.innerHTML = currentDisplay.slice(0, -1);
    }
});