let screen = document.getElementById('screen');
let currentInput = '';
function appendToScreen(value) {
    currentInput += value;
    screen.textContent = currentInput;
}

function clearScreen() {
    currentInput = '';
    screen.textContent = '0';
}

function calculate() {
    if (currentInput !== '') {
        currentInput = eval(currentInput).toString();
        screen.textContent = currentInput;
    }
}

function calculatePercentage() {
    if (currentInput !== '') {
        const result = (parseFloat(currentInput) / 100).toString();
        currentInput = result;
        screen.textContent = result;
    }
}
function makeNegative() {
    if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) * -1).toString();
        screen.textContent = currentInput;
    }
}