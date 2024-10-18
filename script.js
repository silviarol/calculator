let operator = "";
let n1 = "";
let n2 = "";
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
    
    if (n1 != "") {   
        // Resets display when n2 is inputted
        // Allows n2 to be bigger than 1 digit
        display.textContent = "";
        display.textContent += event.target.innerHTML;
        arraySecondNumber.push(display.textContent);
        n2 = arraySecondNumber.join("").replace(/\.+/g, '.'); 
        display.textContent = n2;
    } else if (points.length > 1) {
        display.textContent = display.textContent.replace(/\.+/g, '.'); 
    }

    if (display.textContent.length > displayMaxLength) {
        display.textContent = "OVERFLOW";
    } else if (display.textContent == "NO / BY 0" || display.textContent == "ERROR 404") {

    }
})); 

document.querySelectorAll(".operator").forEach((button) => button.addEventListener("click", (event) => {
      
    if (n1 == "") {
        n1 = display.textContent;
        operands[0] = n1;
        operator = event.target.innerHTML;
        operators[0] = operator;
    } else if (n1 != "" && operator =="") {   
        operator = event.target.innerHTML;
        operators[0] = operator;
    } else if (n1 != "" && operator !="") {   
        n2 = display.textContent;
        operands[1] = n2;
        result = operate(n1, n2, operator); 

        if (result == "NO / BY 0" || result == "ERROR 404") {
            display.textContent = result;
        } else {
            display.textContent = Math.round(result * 100) / 100; 
            n1 = display.textContent;
            operands[0] = n1;
            clearOperatorAndn2()
            operators[0] = event.target.innerHTML;
            operator = operators[0];
        }
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
            return b === 0 ? "NO / BY 0" : a / b;
        default:
            return "ERROR 404";
    }
}

document.querySelector(".equals").addEventListener("click", () => {
    if (n1 == "" && operator == "") {
        display.textContent = "ERROR 404";
    } else if (n1 == "" && operator != "") {
        display.textContent = "ERROR 404";
    } else if (n1 != "" && operator != "") {
        n2 = display.textContent;
        operands[1] = n2;
        result = operate(n1, n2, operator);

        if (result == "NO / BY 0" || result == "ERROR 404") {
            display.textContent = result;
        } else {
            display.textContent = Math.round(result * 100) / 100; 
            n1 = display.textContent;
            operands[0] = n1;
            clearOperatorAndn2();
        }
    }  
});

document.querySelector(".clear").addEventListener("click", () => {
    clearMemory();
});

function clearMemory() {
    display.textContent = "";
    n1 = "";
    operands[0] = "";
    clearOperatorAndn2()
}

function clearOperatorAndn2() {
    n2 = "";
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
            n1 = 0;
            display.textContent = "";
        } else {
            n1 = display.textContent;
        }

        operands[0] = n1;

    } else {
        const currentDisplay = display.textContent.slice(0, -1);
        display.textContent = currentDisplay;

        operands[1] = "";

        if (display.textContent == "") {
            n2 = 0;
            display.textContent = "";
        } else {
            n2 = display.textContent;
        }

        operands[1] = n2;
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
