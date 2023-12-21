let currentInput = '0';
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

  // Додайте слухач події для кнопки "Check Prime"
  document.querySelector('.btn.checkPrime').addEventListener('click', checkPrime);

  function isPrime(number) {
    if (number === 1) {
      return false;
    } else if (number > 1) {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }

  function checkPrime() {
    const result = parseFloat(currentInput);
    const resultContainer = document.getElementById('resultContainer');

    if (!isNaN(result)) {
      const primeMessage = isPrime(result) ? 'Prime' : 'Not Prime';

      // Оновіть значення елементу на сторінці
      resultContainer.textContent = `Result: ${result} is ${primeMessage}`;


      alert(`Result: ${result} is ${primeMessage}`);
    }
  }

}
