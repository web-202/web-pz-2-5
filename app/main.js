let screen = document.getElementById('screen');
let currentInput = '';
let currentOperator = '';
let previousInput = '';
let saveRes = null;

function appendToScreen(value) {
    currentInput += value;
    screen.textContent = currentInput;
}

function clearScreen() {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    screen.textContent = '0';
}

function calculate() {
    if (currentInput !== '') {
        previousInput = currentInput;
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
document.addEventListener("DOMContentLoaded", function() {
    const changeColorButton = document.getElementById("color_change");
    const colorButtons = document.querySelectorAll("button");
  
    changeColorButton.addEventListener("click", function() {
      const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      colorButtons.forEach(function(button) {
        button.style.backgroundColor = randomColor;
      });
    });
  });
let savedResult = null;

function saveResult() {
  savedResult = currentInput;
}

function pasteResult() {
    if (savedResult !== null) {
      currentInput += savedResult;
      screen.textContent = currentInput;
    }
  }
  