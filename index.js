let number = undefined
let secondNumber = undefined
let operator = undefined

const resultInputEl = document.getElementById('result')

function resetDisplay() {
  resultInputEl.value = '0'

  return '';
}

function resetAll() {
  number = undefined;
  secondNumber = undefined;
  operator = undefined

  resetDisplay()
}

function percentNumber() {
  resultInputEl.value = (parseFloat(resultInputEl.value) / 100).toString()
}

function clickNumber(number) {
  let oldResult = resultInputEl.value

  if (oldResult === '0') {
    oldResult = resetDisplay()
  }

  oldResult += number
  resultInputEl.value = oldResult
}

function initNumber() {
  number = parseFloat(resultInputEl.value)
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
  if (resultInputEl.value.includes('.')) {
    return;
  }
  resultInputEl.value = resultInputEl.value + '.'
}

function reverseSign() {
  resultInputEl.value = (parseFloat(resultInputEl.value) * -1).toString()
}

function addNumbers(number, secondNumber) {
  number = number.toString()
  secondNumber = secondNumber.toString()
  let res = parseFloat(number) + parseFloat(secondNumber);
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
    secondNumber = parseFloat(resultInputEl.value)
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
  resultInputEl.value = result
}

function calcFibonacci() {
  let num = parseInt(resultInputEl.value)
  let memo = [0, 1]
  for (let i = 1; i < num; i++) {
    memo.push(memo[i - 1] + memo[i])
  }

  resultInputEl.value = memo[num]
}

function copy() {
  navigator.clipboard.writeText(resultInputEl.value)
    .then(() => {
    })
}

function paste() {
  navigator.clipboard.readText()
    .then((clipboardText) => {
      if (typeof clipboardText != "string") {
        return
      }
      if (!isNaN(parseFloat(clipboardText))) {
        resultInputEl.value = parseFloat(clipboardText)
      }
    })
}

function initPicker(pickerId) {
  document.getElementById(pickerId).click()

}

function changeColor(picker, classToChange) {
  const selectedColor = picker.value
  const styleSheet = document.styleSheets[0]

  for (const cssRule of styleSheet.cssRules) {
    if (cssRule.selectorText === '.' + classToChange) {
      cssRule.style.setProperty('background-color', selectedColor)
      break;
    }
  }
}
