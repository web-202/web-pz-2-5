let screen = document.getElementById('screen');
let currentInput = '';
let currentOperator = '';
let previousInput = '';
let saveRes = null;

function calculateFibonacci() {
    // Отримання введеного користувачем числа
    let inputNumber = document.getElementById("screen").innerText;
    console.log(inputNumber)
    // Перевірка на валідність числа
    if (isNaN(inputNumber) || inputNumber > 0) {
        // alert("Please enter a non-negative number.");
        // return;
    }

    // Обчислення числа Фібоначчі
    var result = fibonacci(parseInt(inputNumber));
    console.log(result)
    // Виведення результату
    document.getElementById("screen").innerText = result;
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function appendToScreen(value) {
    currentInput += value;
    screen.textContent = currentInput;
}

function clearScreen() {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    screen.textContent = '0';
}

function calculate() {
    if (currentInput !== '') {
        previousInput = currentInput;
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
