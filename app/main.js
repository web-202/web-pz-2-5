let screen = document.querySelector('.screen');
let currentValue = '';
const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33A1', '#33A1FF'];
const colors1 = ['#FF2356', '#444444', '#666666', '#777777', '#234521'];
function app(value) {
  console.log(value)
  currentValue += value;
  screen.textContent = currentValue;
}

function clearAC() {
  console.log('0');
  currentValue = '';
  screen.textContent = '0';
}


function percentage() {
  if (currentValue !== '') {
    const result = (parseFloat(currentValue) / 100).toString();
    currentValue = result;
    screen.textContent = result;
  }
}

function calculate() {
  if (currentValue !== '') {
    currentValue = eval(currentValue).toString();
    screen.textContent = currentValue;
  }
}

function changeSign() {
  if (currentValue !== '') {
    currentValue = (parseFloat(currentValue) * -1).toString();
    screen.textContent = currentValue;
  }
}
function changeColor(){
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomColorIndex];
  document.querySelector('.calc').style.backgroundColor = randomColor;

  const randomColorIndex1 = Math.floor(Math.random() * colors1.length);
  const randomColor1 = colors1[randomColorIndex];

  const buttons = document.querySelectorAll('.btn');
  console.log(buttons)
  buttons.forEach(button => {
    button.style.backgroundColor = randomColor1;
  });
}
function save(){
  const currentInput = document.querySelector('.screen').textContent;
  localStorage.setItem('savedData', currentInput);
  console.log(currentInput)
}
function paste(){
  const currentSave = localStorage.getItem('savedData').toString()
  screen.textContent = currentSave;
}
