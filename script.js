let operator = "";
let n1 = "";
let n2 = "";
const regex = /^(-?\d*\.?\d+)([+\-×÷])(-?\d*\.?\d*)$/;

const btn = document.querySelectorAll(".number, .operator, .point");
const clear = document.querySelector(".clear");
const deleter = document.querySelector(".delete");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");

btn.forEach((button) => button.addEventListener("click", () => {
        
    display.textContent += button.innerHTML;

    let displayed = display.innerHTML;

    let str = displayed;

    if (regex.test(str) == true) {
        const parts = str.match(regex);
        n1 = parts[1];
        operator = parts[2];
        n2 = parts[3] || "";
    } else if (str.length > 7) {
        display.innerHTML = "ERROR!!";
    }
})); 

equals.addEventListener("click", () => {
    if (n1 == "" && operator == "") {
        display.innerHTML = "ERROR!!";
    } else if (n1 != "" && operator == "") {
        display.innerHTML = "ERROR!!";
    } else {
        const result = operate(n1, n2, operator);
        display.innerHTML = parseFloat(Math.round(result * 1000) / 1000);
    }
});

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

clear.addEventListener("click", () => {
    clearDisplay();
});

function clearDisplay() {
    display.innerText = "";
    n1 = "";
    n2 = "";
    operator = "";
}

deleter.addEventListener('click', () => {
    const currentDisplay = display.innerHTML;
    display.innerHTML = currentDisplay.slice(0, -1);
});