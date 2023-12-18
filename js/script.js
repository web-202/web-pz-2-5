let currentInput = '0';
let status = 0;
function updateDisplay() {
  document.getElementById('result').innerText = currentInput;
}

function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = number.toString();
  } else {
    currentInput += number.toString();
  }
  updateDisplay();
}
function appendOperator(operator) {
  currentInput += operator;
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '0';
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
  function getCurrentResult() {
    return document.getElementById('result').textContent;
  }
  function saveResult() {
    const currentResult = getCurrentResult();
    localStorage.setItem('calculatorResult', currentResult);
  }


  function pasteResult() {
    const savedResult = localStorage.getItem('calculatorResult');
    if (savedResult !== null) {
      document.getElementById('result').textContent = savedResult;
    }
  }
  document.querySelector('.btn.saver').addEventListener('click', saveResult);
  document.querySelector('.btn.paster').addEventListener('click', pasteResult);

}
