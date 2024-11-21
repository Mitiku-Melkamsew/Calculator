const buttonContainer = document.querySelector(".button-container");
const display = document.querySelector(".display");
let total = 0;
let term = display.innerText || "0";
let currentOperator = null;

const updateDisplay = (value) => {
    display.innerText = value;
};

const handleNumber = (value) => {
    term = term === "0" ? value : term + value;
    updateDisplay(term);
};

const handleOperator = (operator) => {
    if (currentOperator) {
        calculate();
    } else {
        total = parseFloat(term);
    }
    currentOperator = operator;
    term = "0";
};

const handleEqual = () => {
    calculate();
    updateDisplay(total);
    term = total.toString();
    currentOperator = null;
};

const handleBack = () => {
    term = term.length === 1 ? "0" : back(term);
    updateDisplay(term);
};

const handleClear = () => {
    term = "0";
    total = 0;
    currentOperator = null;
    updateDisplay(term);
};

buttonContainer.addEventListener("click", function (event) {
    const targetClass = event.target.className;
    const targetValue = event.target.innerText;

    if (targetClass.includes("num") || targetClass.includes("decimal")) {
        handleNumber(targetValue);
    } else if (targetClass.includes("operator")) {
        handleOperator(targetValue);
    } else if (targetClass.includes("equal")) {
        handleEqual();
    } else if (targetClass.includes("back")) {
        handleBack();
    } else if (targetClass.includes("clear")) {
        handleClear();
    }
});

const calculate = () => {
    switch (currentOperator) {
        case "+":
            total += parseFloat(term);
            break;
        case "-":
            total -= parseFloat(term);
            break;
        case "*":
            total *= parseFloat(term);
            break;
        case "/":
            if (parseFloat(term) === 0) {
                updateDisplay("Zero division error");
                return;
            }
            total /= parseFloat(term);
            break;
    }
};

const back = (text) => text.slice(0, -1);
