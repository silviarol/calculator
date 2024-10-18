let operator = "";
let n1 = "";
let n2 = "";
let operands = ["", ""];
let operators = [""];
let result = "";
let array = [];
const displayMaxLength = 7;

const negative = document.querySelector(".negative");
const display = document.querySelector(".display");

document.querySelectorAll(".number, .point").forEach((button) => button.addEventListener("click", (event) => {    
    
    display.textContent += event.target.innerHTML;
    let displayed = display.textContent.split("");
    let points = displayed.filter((element) => element == ".");
    
    if (n1 != "") {   
        display.textContent = "";
        display.textContent += event.target.innerHTML;
        array.push(display.textContent);
        let secondNumber = array.join("").replace(/\.+/g, '.'); 
        display.textContent = secondNumber;
    } else if (points.length > 1) {
        display.textContent = display.textContent.replace(/\.+/g, '.'); 
    }

    if (display.textContent.length > displayMaxLength) {
    display.textContent = "ERROR!!";
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
        display.innerHTML = Math.round(result * 100) / 100; 
        n1 = result;
        operands[0] = n1;
        operators[0] = "";
        operator = operators[1];
        operators[0] = event.target.innerHTML;
        operator = operators[0];
        operands[1] = "";
        n2 = "" ;
        array = [];
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

document.querySelector(".equals").addEventListener("click", () => {
    if (n1 == "" && operator == "") {
        display.innerHTML = "ERROR!!";
    } else if (n1 == "" && operator != "") {
        display.innerHTML = "ERROR!!";
    } else if (n1 != "" && operator != "") {
        n2 = display.textContent;
        operands[1] = n2;
        result = operate(n1, n2, operator);
        display.innerHTML = Math.round(result * 100) / 100;
        n1 = result;
        operands[0] = "";
        operands[1] = "";
        n2 = "";
        operator = "";
        array = [];
    }

});

document.querySelector(".clear").addEventListener("click", () => {
    clearMemory();
});

function clearMemory() {
    display.innerText = "";
    n1 = "";
    n2 = "";
    operator = "";
    operands[0] = "";
    operands[1] = "";
    operators[0] = "";
    array = [];
}

document.querySelector(".delete").addEventListener('click', () => {
    const currentDisplay = display.innerHTML;
    result = operate(n1, n2, operator);

    if (result != "") {
        display.innerHTML = currentDisplay.slice(0, -1);
        n1 = currentDisplay.slice(0, -1);
        if (n1 == "") {
            clearMemory();
        }  
        operands[0] = n1; 
    } else {
        display.innerHTML = currentDisplay.slice(0, -1);
    }
});