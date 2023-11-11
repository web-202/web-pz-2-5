let a = '';
let b = '';
let sing = '';
let finish = false;
let clipboard = '';

let colorButtons = document.querySelectorAll(".color-change");
let colorButton = document.querySelectorAll("button");






const genNew = document.getElementById("genNew");

const copyButton = document.querySelector('.calculateCopy');
const pasteButton = document.querySelector('.calculatePaste');


const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const alt = ['*', '/', '-', '+', '%']; 

let currentInput = document.querySelector('.win');

function clearAll() {
  a = '';
  b = '';
  sing = '';
  finish = false;
  currentInput.textContent = '0';
}

document.querySelector('.clearDisplay').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
  if (!event.target.classList.contains('button')) return;

  const key = event.target.textContent;

  if (digit.includes(key)) {
    if (b === '' && sing === '') {
      a += key;
      currentInput.textContent = a;
    } else if (a !== '' && b !== '' && finish) {
      clearAll();
      a = key;
      currentInput.textContent = a;
    } else {
      b += key;
      currentInput.textContent = b;
    }
    return;
  }

  if (alt.includes(key)) {
    sing = key;
    currentInput.textContent = sing;
    return;
  }

  if (key === '=') {
    switch (sing) {
      case "+":
        a = (+a) + (+b);
        break;
      case "-":
        a = a - b;
        break;
      case "*":
        a = a * b;
        break;
      case "/":
        if (b === '0') {
          currentInput.textContent = 'error';
          a = '';
          b = '';
          sing = '';
          return;
        }
        a = a / b;
        break;
      case "%":
        a = a / 100;
        break;
    }
    finish = true;
    currentInput.textContent = a;
  }



  colorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      colorButton.forEach((button) => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        button.style.backgroundColor = "#" + randomColor;
        button.style.color = "#fff";
      });

      const calculator = document.querySelector(".calculator"); 
      calculator.style.backgroundColor = "orange";

      
    });
  });

  

}

let result = 0;

function saveResult() {
  result = parseFloat(currentInput.textContent);
}

function pasteResult() {
  currentInput.textContent = result;
  a = result;
  b = '';
  sing = '';
  finish = true;
}
