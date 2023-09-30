let currentInput = "0";

function updateDisplay() {
    document.getElementById("result").textContent = currentInput;
}

function clearDisplay() {
    currentInput = "0";
    updateDisplay();
}

function appendDigit(digit) {
    if (currentInput === "0") {
        currentInput = digit;
    } else {
        currentInput += digit;
    }
    updateDisplay();
}

function appendDecimal(decimal) {
    if (!currentInput.includes(decimal)) {
        currentInput += decimal;
    }
    updateDisplay();
}

function toggleSign() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
}

function applyPercent() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

function appendOperator(operator) {
    currentInput += ` ${operator} `;
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = "Error";
        updateDisplay();
    }
}
function calculateFibonacci() {
    const n = parseInt(currentInput);
    if (!isNaN(n) && n >= 0) {
        currentInput = fib(n).toString();
        updateDisplay();
    } else {
        currentInput = "Error";
        updateDisplay();
    }
}

function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}