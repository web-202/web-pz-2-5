let screen = document.getElementById('screen');
let previousResult = document.getElementById('previous-result');
let currentInput = '';
let memory = 0;
let history = [];
function appendToScreen(value) {
    currentInput += value;
    screen.textContent = currentInput;
}
function clearScreen() {
    currentInput = '';
    screen.textContent = '0';
}
function performOperation(operation) {
    if (currentInput !== '') {
        if (operation === '=') {
            let expression = currentInput;
            currentInput = eval(currentInput).toString();
            history.push(expression + '=' + currentInput);
            if (history.length > 5) {
                history.shift(); 
            }
            displayHistory();
            screen.textContent = currentInput;
        } else if (operation === '+') {
            memory += parseFloat(currentInput);
        } else if (operation === '-') {
            memory -= parseFloat(currentInput);
        } else if (operation === '*') {
            memory *= parseFloat(currentInput);
        } else if (operation === '/') {
            memory /= parseFloat(currentInput);
        }
        currentInput = '';
    }
}
function calculate() {
    performOperation('=');
}
function clearMemory() {
    memory = 0;
}
function calculatePercentage() {
    if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) / 100).toString();
        screen.textContent = currentInput;
    }
}
function makeNegative() {
    if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) * -1).toString();
        screen.textContent = currentInput;
    }
}
function clearHistory() {
    history = [];
    displayHistory();
}
function displayHistory() {
    previousResult.textContent = history.join('\n');
}
let result = 0;
function saveResult() {
    result = parseFloat(document.getElementById("screen").innerText);
}
function pasteResult() {
    const screen = document.getElementById("screen");
    screen.innerText = result;
    currentInput = result.toString();
}
