let operator = "";
let firstOperand = "";
let secondOperand = "";
let operands = ["", ""];
let operators = [""];
let result = "";
let arraySecondNumber = [];
const displayMaxLength = 8;

const display = document.querySelector(".display");

document.querySelectorAll(".number, .point").forEach((button) => button.addEventListener("click", (event) => {    
    
    display.textContent += event.target.innerHTML;
    let displayed = display.textContent.split("");
    let points = displayed.filter((element) => element == ".");
    
    if (firstOperand != "") {   
        // Resets display when secondOperand is inputted
        // Allows secondOperand to be bigger than 1 digit
        display.textContent = "";
        display.textContent += event.target.innerHTML;
        arraySecondNumber.push(display.textContent);
        secondOperand = arraySecondNumber.join("").replace(/\.+/g, '.'); 
        display.textContent = secondOperand;
    } else if (points.length > 1) {
        display.textContent = display.textContent.replace(/\.+/g, '.'); 
    }

    if (display.textContent.length > displayMaxLength) {
        display.textContent = "OVERFLOW";
    } else if (display.textContent == "NO / BY 0" || display.textContent == "ERROR 404") {

    }
})); 

document.querySelectorAll(".operator").forEach((button) => button.addEventListener("click", (event) => {
      
    if (firstOperand == "") {
        firstOperand = display.textContent;
        operands[0] = firstOperand;
        operator = event.target.innerHTML;
        operators[0] = operator;
    } else if (firstOperand != "" && operator =="") {   
        operator = event.target.innerHTML;
        operators[0] = operator;
    } else if (firstOperand != "" && operator !="") {   
        secondOperand = display.textContent;
        operands[1] = secondOperand;
        result = operate(firstOperand, secondOperand, operator); 

        if (result == "NO / BY 0" || result == "ERROR 404") {
            display.textContent = result;
        } else {
            display.textContent = Math.round(result * 100) / 100; 
            firstOperand = display.textContent;
            operands[0] = firstOperand;
            clearOperatorAndsecondOperand()
            operators[0] = event.target.innerHTML;
            operator = operators[0];
        }
    } 
})); 

function operate(firstOperand, secondOperand, operator) {
    
    const a = parseFloat(firstOperand);
    const b = parseFloat(secondOperand);

    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "×":
            return a * b;
        case "÷":
            return b === 0 ? "NO / BY 0" : a / b;
        default:
            return "ERROR 404";
    }
}

document.querySelector(".equals").addEventListener("click", () => {
    if (firstOperand == "" && operator == "") {
        display.textContent = "ERROR 404";
    } else if (firstOperand == "" && operator != "") {
        display.textContent = "ERROR 404";
    } else if (firstOperand != "" && operator != "") {
        secondOperand = display.textContent;
        operands[1] = secondOperand;
        result = operate(firstOperand, secondOperand, operator);

        if (result == "NO / BY 0" || result == "ERROR 404") {
            display.textContent = result;
        } else {
            display.textContent = Math.round(result * 100) / 100; 
            firstOperand = display.textContent;
            operands[0] = firstOperand;
            clearOperatorAndsecondOperand();
        }
    }  
});

document.querySelector(".clear").addEventListener("click", () => {
    clearMemory();
});

function clearMemory() {
    display.textContent = "";
    firstOperand = "";
    operands[0] = "";
    clearOperatorAndsecondOperand()
}

function clearOperatorAndsecondOperand() {
    secondOperand = "";
    operator = "";
    operands[1] = "";
    operators[0] = "";
    arraySecondNumber = [];
}

document.querySelector(".delete").addEventListener('click', () => {

    if (operator == "") {
        const currentDisplay = display.textContent.slice(0, -1);
        display.textContent = currentDisplay;

        operands[0] = "";

        if (display.textContent == "") {
            firstOperand = 0;
            display.textContent = "";
        } else {
            firstOperand = display.textContent;
        }

        operands[0] = firstOperand;

    } else {
        const currentDisplay = display.textContent.slice(0, -1);
        display.textContent = currentDisplay;

        operands[1] = "";

        if (display.textContent == "") {
            secondOperand = 0;
            display.textContent = "";
        } else {
            secondOperand = display.textContent;
        }

        operands[1] = secondOperand;
    }
});

document.querySelector(".negative").addEventListener('click', () => {

    if (display.textContent == "NO / BY 0" || display.textContent == "ERROR 404" 
        || display.textContent == "OVERFLOW") {
        display.textContent == "ERROR 404"
    } else {
        display.textContent *= -1;
    }

});
