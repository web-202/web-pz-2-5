let number = undefined
let secondNumber = undefined
let operator = undefined

const resultEl = document.getElementById('result')

function resetDisplay() {
  resultEl.textContent = '0'

  return '';
}

function resetAll() {
  number = undefined;
  secondNumber = undefined;
  operator = undefined

  resetDisplay()
}

function percentNumber() {
  resultEl.textContent = (parseFloat(resultEl.textContent) / 100).toString()
}

function clickNumber(number) {
  let oldResult = resultEl.textContent

  if (oldResult === '0') {
    oldResult = resetDisplay()
  }

  oldResult += number
  resultEl.textContent = oldResult
}

function initNumber() {
  number = parseFloat(resultEl.textContent)
}

function initOperator(op) {
  operator = op;
}

function clickOperator(operator) {
  switch (operator) {
    case '/':
    case '*':
    case '-':
    case '+':
      initNumber()
      initOperator(operator)
      resetDisplay()
      break
    default:
      alert(`unknown action - ${operator}`)
      return
  }
}

function clickDot() {
  if (resultEl.textContent.includes('.')) {
    return;
  }
  resultEl.textContent = resultEl.textContent + '.'
}

function reverseSign() {
  resultEl.textContent = (parseFloat(resultEl.textContent) * -1).toString()
}


function addNumbers(number, secondNumber) {
  number = number.toString()
  secondNumber = secondNumber.toString()
  let res =  parseFloat(number) + parseFloat(secondNumber);
  let decFirst = number.split('.')[1] === undefined ? 0 : number.split('.')[1].length
  let decSecond = secondNumber.split('.')[1] === undefined ? 0 : secondNumber.split('.')[1].length
  let longestRounding = Math.max(decFirst, decSecond)

  return Math.round(res * Math.pow(10, longestRounding)) / Math.pow(10, longestRounding)
}

function multiplyNumbers(number, secondNumber) {
  return number * secondNumber
}

function executeStatement() {
  if (operator === undefined) {
    return
  }

  if (secondNumber === undefined) {
    secondNumber = parseFloat(resultEl.textContent)
  }

  let result = 0;
  switch (operator) {
    case '+':
      result = addNumbers(number, secondNumber)
      break
    case '-':
      result = addNumbers(number, -1 * secondNumber)
      break
    case '*':
      result = multiplyNumbers(number, secondNumber)
      break
    case '/':
      result = multiplyNumbers(number, 1 / secondNumber)
      break
    default:
      alert(`unknown action - ${operator}`)
      return
  }

  number = result;
  resultEl.textContent = result
}




