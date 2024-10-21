let firstOperand = "";
let secondOperand = "";
let operator = "";
let result = "";
const displayMaxLength = 8;
let resultDisplayed = false;

const display = document.querySelector(".display");

document.querySelectorAll(".number, .point").forEach((button) => button.addEventListener("click", (event) => {    
    
    if (display.textContent == "NO / BY 0" || display.textContent == "ERROR 404" 
        || display.textContent == "OVERFLOW") {
        clearMemory();
    }

    if (resultDisplayed == true && operator == "") {   
        firstOperand = event.target.innerHTML;
        display.textContent = firstOperand;
        secondOperand = "";
        operator = "";
        result = "";
        resultDisplayed = false;
        return;
    }
    
    if (firstOperand != "" && operator != "") {   
        secondOperand += event.target.innerHTML;
        display.textContent = secondOperand;
        resultDisplayed = false;
    } else {
        display.textContent += event.target.innerHTML;
        resultDisplayed = false;
    }
    

    checkDecimals();

    if (display.textContent.length > displayMaxLength) {
        display.textContent = "OVERFLOW";
    }

    console.log(firstOperand);
    console.log(secondOperand);
})); 

function checkDecimals() {
    let displayed = display.textContent.split("");
    let points = displayed.filter((element) => element == ".");

    if (points.length > 1) {
        display.textContent = display.textContent.replace(/\.+/g, '.'); 
    } 
}

document.querySelectorAll(".operator").forEach((button) => button.addEventListener("click", (event) => {
      
    if (firstOperand == "") {
        firstOperand = display.textContent;
        operator = event.target.innerHTML;
        resultDisplayed = false;
    } else if (firstOperand != "" && operator == "") {   
        operator = event.target.innerHTML;
        resultDisplayed = false;
    } else if (firstOperand != "" && operator !="") {   
        secondOperand = display.textContent;
        result = operate(firstOperand, secondOperand, operator); 

        if (result == "NO / BY 0" || result == "ERROR 404") {
            display.textContent = result;
        } else {
            display.textContent = Math.round(result * 100) / 100; 
            firstOperand = display.textContent;
            secondOperand = "";
            operator = "";
            result = "";
            resultDisplayed = true;
        }

        operator = event.target.innerHTML;
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
        result = operate(firstOperand, secondOperand, operator);

        if (result == "NO / BY 0" || result == "ERROR 404") {
            display.textContent = result;
        } else {
            display.textContent = Math.round(result * 100) / 100; 
            firstOperand = display.textContent;
            secondOperand = "";
            operator = "";
            result = "";
            resultDisplayed = true;
        }
    }  
});

document.querySelector(".clear").addEventListener("click", () => {
    clearMemory();
});

function clearMemory() {
    display.textContent = "";
    firstOperand = "";
    secondOperand = "";
    operator = "";
    result = "";
    resultDisplayed = false;
}

document.querySelector(".delete").addEventListener('click', () => {

    if (operator == "") {
        const currentDisplay = display.textContent.slice(0, -1);
        display.textContent = currentDisplay;

        firstOperand = "";

        if (display.textContent == "") {
            firstOperand = 0;
            display.textContent = "";
        } else {
            firstOperand = display.textContent;
        }
    } else {
        const currentDisplay = display.textContent.slice(0, -1);
        display.textContent = currentDisplay;

        secondOperand = "";

        if (display.textContent == "") {
            secondOperand = 0;
            display.textContent = "";
        } else {
            secondOperand = display.textContent;
        }
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
