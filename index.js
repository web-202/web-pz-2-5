let screen = document.getElementById('screen');
let currentInput = '';
function appendToScreen(value) {
    currentInput += value;
    screen.textContent = currentInput;
}

function clearScreen() {
    currentInput = '';
    screen.textContent = '0';
}

function calculate() {
    if (currentInput !== '') {
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
  const changeColorButton = document.getElementById("changeColor");
  const tdElements = document.querySelectorAll("td");

   changeColorButton.addEventListener("click", function() {
    
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    
    tdElements.forEach(function(td) {
      td.style.backgroundColor = randomColor;
    });
  });
});

let result = null;

function Save(){
	result = currentInput;	
}

function Paste(){
	if(result !== null){
		currentInput += result;
		screen.textContent = currentInput;
	}
}