let displayValue = '0';
let currentResult = 0; 
let lastOperation = null;
let percentageResult = null;

function clearDisplay() {
    displayValue = '0';
    percentageResult = null;
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
function calculatePercentage() {
  const display = document.getElementById('display');
  const currentInput = parseFloat(display.textContent); 

  if (!isNaN(currentInput)) {
    percentageResult = currentInput / 100; 
    displayValue = percentageResult.toString(); 
  }
  updateDisplay();
}

function performOperation(operator) {
  if (lastOperation !== null) {
      calculate();
  }

  if (operator === '%') {
      calculatePercentage();
  } else if (percentageResult !== null) {
      displayValue = percentageResult.toString() + operator;
      percentageResult = null;
  } else {
      displayValue += operator;
  }

  lastOperation = operator;
  updateDisplay();
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



  
  