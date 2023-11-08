let screen = document.getElementById('data');
let currentInput = '';
function appToData(value) {
    currentInput += value;
    screen.textContent = currentInput;
}

function clearData() {
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
function change() {
    if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) * -1).toString();
        screen.textContent = currentInput;
    }
}
function changeColor() {
    const randomColor = getRandomColor(); 
    document.querySelector('.calculator').style.backgroundColor = randomColor; 
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.style.backgroundColor = getRandomColor(); 
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}