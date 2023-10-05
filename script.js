function clearDisplay() {
    document.getElementById('result').value = '0';
}

function appendToDisplay(value) {
    const display = document.getElementById('result');
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function toggleSign() {
    const display = document.getElementById('result');
    display.value = -parseFloat(display.value);
}

function calculatePercentage() {
    const display = document.getElementById('result');
    display.value = parseFloat(display.value) / 100;
}

function calculate() {
    const display = document.getElementById('result');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
