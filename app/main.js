let screen = document.querySelector('.screen');
let currentValue = '';
function app(value) {
  console.log(value)
  currentValue += value;
  screen.textContent = currentValue;
}

function clear() {
  console.log('0')
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
