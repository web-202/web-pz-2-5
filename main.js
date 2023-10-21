let currentInput = '';
let secondInput = '';
let operator = '';
let isCalculated = false;

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operators = ['-', '+', '×', '÷', '%', '+/-'];

const display = document.querySelector('.calculator-screen p');

function clearAll() {
    currentInput = '';
    secondInput = '';
    operator = '';
    isCalculated = false;
    display.textContent = '0';
}

document.querySelector('.clear-all').onclick = clearAll;

document.querySelector('.calculator-buttons').onclick = (event) => {
    if (!event.target.classList.contains('button')) return;
    if (event.target.classList.contains('clear-all')) return;

    const key = event.target.textContent;

    if (digits.includes(key)) {
        if (secondInput === '' && operator === '') {
            currentInput += key;
            display.textContent = currentInput;
        } else if (currentInput !== '' && secondInput !== '' && isCalculated) {
            secondInput = key;
            isCalculated = false;
            display.textContent = secondInput;
        } else {
            secondInput += key;
            display.textContent = secondInput;
        }
    }

    if (operators.includes(key)) {
        if (key === '%') {
            if (operator === '') {
                currentInput = currentInput / 100;
            } else {
                secondInput = secondInput / 100;
            }
            display.textContent = currentInput;
        } else if (key === '+/-') {
            currentInput = -currentInput;
            display.textContent = currentInput;
        } else {
            operator = key;
        }
    }

    if (key === '=') {
        if (secondInput === '') secondInput = currentInput;

        switch (operator) {
            case '+':
                currentInput = (+currentInput) + (+secondInput);
                break;
            case '-':
                currentInput = currentInput - secondInput;
                break;
            case '×':
                currentInput = currentInput * secondInput;
                break;
            case '÷':
                if (secondInput === '0') {
                    display.textContent = 'Error';
                    currentInput = '';
                    secondInput = '';
                    operator = '';
                    return;
                }
                currentInput = currentInput / secondInput;
                break;
        }

        isCalculated = true;
        display.textContent = currentInput;
    }
}
