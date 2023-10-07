let displayValue = '0';
function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}
function calculatePercentage(displayValue) {
    const result = displayValue / 100;
    return `${percent}${result}`;
  }

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}
