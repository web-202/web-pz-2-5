let tsifra = document.getElementById('tsifra');
let val = '';
let currentOperator = '';
let previousInput = '';
let saveRes = null;
function appendTotsifra(value) {
    val += value;
    tsifra.textContent = val;
}
function cleartsifra() {
    val = '';
    tsifra.textContent = '0';
}

function calcul() {
    if (val !== '') {
        val = eval(val).toString();
        tsifra.textContent = val;
    }
}

function calculatePercentage() {
    if (val !== '') {
        const result = (parseFloat(val) / 100).toString();
        val = result;
        tsifra.textContent = result;
    }
}
function makeminus() {
    if (val !== '') {
        val = (parseFloat(val) * -1).toString();
        tsifra.textContent = val;
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
  
function cube() {
    if (val !== '') {
        val = Math.pow(parseFloat(val), 3).toString();
        tsifra.textContent = val;
    }
}
