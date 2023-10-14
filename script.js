let displayValue = '0';
let currentResult = 0; 

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

document.getElementById('change-color-button').addEventListener('click', () => {
    const calculator = document.querySelector('.calculator');
  
    if (calculator.classList.contains('red')) {
      calculator.classList.remove('red');
      calculator.classList.add('green'); 
      document.querySelectorAll('.btn').forEach((button) => {
        button.style.backgroundColor = '#ff00ff';
      });
    } else {
      calculator.classList.remove('green'); 
      calculator.classList.add('red');
      document.querySelectorAll('.btn').forEach((button) => {
        button.style.backgroundColor = '#0000ff';
      });
    }
  });

function saveResult() {
    const display = document.getElementById('display');
    const displayValue = display.textContent;
    currentResult = parseFloat(displayValue);
}
function pasteResult() {
    const display = document.getElementById('display');
    currentInput = currentResult.toString(); 
    display.textContent = currentInput;
}

  
  