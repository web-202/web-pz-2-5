const outputDisplay = document.getElementById('output-display')
const buttonDivide = document.getElementById('button-fun-divide')
const buttonMultiply = document.getElementById('button-fun-multiply')
const buttonMines = document.getElementById('button-fun-mines')
const buttonPlus = document.getElementById('button-fun-plus')
const buttonEquals = document.getElementById('button-fun-equals')
let fontSize = 100;
let savedResult = ''


const appendToDisplay = (value) => {
  outputDisplay.textContent += value;
  checkWidthDisplay(outputDisplay);
}

const clearDisplay = () => {
  outputDisplay.textContent = '';
}

const calculateResult = () => {
  try {
    const result = eval(outputDisplay.textContent)
    outputDisplay.textContent = roundToTwo(result);
  } catch (error) {
    outputDisplay.value = 'Error';
  }
}

const checkWidthDisplay = (outputDisplay) => {
  if (outputDisplay.textContent.length < 8) {
    outputDisplay.style.fontSize = 100 + "px"
    return
  }

  let counter = 1
  while (outputDisplay.clientWidth > 450) {
    fontSize -= counter;
    outputDisplay.style.fontSize = fontSize + "px"
  }
}

const roundToTwo = (num) => {
  return +(Math.round(num + "e+2") + "e-2");
}

const multiplyOnDivide = () => {
  try {
    outputDisplay.textContent = (document.getElementById('output-display').textContent) * -1;
  } catch (error) {
    outputDisplay.textContent = 'Error';
  }
}

const covertToBinary = () => {
  try {
    outputDisplay.textContent = parseInt((document.getElementById('output-display').textContent), 10).toString(2);
  } catch (error) {
    outputDisplay.textContent = 'Error';
  }
}

const divisionByPercentage = () => {
  outputDisplay.textContent = outputDisplay.textContent / 100
}



const saveResult = () => {
  savedResult = outputDisplay.textContent;
  outputDisplay.textContent = ''
}

const pasteResult = () => {
  outputDisplay.textContent += savedResult;
}

const changeColor = (color) => {
  if (color === 'simple') {
    buttonDivide.style.background = 'orange';
    buttonEquals.style.background = 'orange';
    buttonMultiply.style.background = 'orange';
    buttonPlus.style.background = 'orange';
    buttonMines.style.background = 'orange';
  }
  if (color === 'expert') {
    buttonDivide.style.background = 'mediumpurple';
    buttonEquals.style.background = 'mediumpurple';
    buttonMultiply.style.background = 'mediumpurple';
    buttonPlus.style.background = 'mediumpurple';
    buttonMines.style.background = 'mediumpurple';
  }
}
