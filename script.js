const display = document.querySelector(".display");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const equals = document.querySelector(".equals");
const cancel = document.querySelector(".cancel");

one.addEventListener("click", () => {
    display.innerHTML = "1";
});

two.addEventListener("click", () => {
    display.innerHTML = "2";
});

three.addEventListener("click", () => {
    display.innerHTML = "3";
});

four.addEventListener("click", () => {
    display.innerHTML = "4";
});

five.addEventListener("click", () => {
    display.innerHTML = "5";
});

six.addEventListener("click", () => {
    display.innerHTML = "6";
});

seven.addEventListener("click", () => {
    display.innerHTML = "7";
});

eight.addEventListener("click", () => {
    display.innerHTML = "8";
});

nine.addEventListener("click", () => {
    display.innerHTML = "9";
});

zero.addEventListener("click", () => {
    display.innerHTML = "0";
});