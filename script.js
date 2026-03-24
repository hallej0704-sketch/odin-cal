let firstNumber = "";
let secondNumber = "";
let operator = "";
let shouldReset = false;

let display = document.getElementById("display");

// number input
function appendNumber(num) {
    if (shouldReset) {
        display.textContent = num;
        shouldReset = false;
    } else {
        if (display.textContent === "0") {
            display.textContent = num;
        } else {
            display.textContent += num;
        }
    }
}

// set operator
function setOperator(op) {
    if (operator !== "") {
        calculate();
    }
    firstNumber = display.textContent;
    operator = op;
    shouldReset = true;
}

// clear
function clearDisplay() {
    display.textContent = "0";
    firstNumber = "";
    secondNumber = "";
    operator = "";
}

// calculation
function calculate() {
    secondNumber = display.textContent;

    let result;

    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            display.textContent = "Nope 😤";
            return;
        }
        result = num1 / num2;
    }

    display.textContent = Math.round(result * 100) / 100;

    operator = "";
    shouldReset = true;
}
