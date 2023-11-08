let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '×', '÷', '%', '+/-'];

const out = document.querySelector('.calculator-screen p');


function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }

        else {
            b += key;
            out.textContent = b;
            return
        }
    }

    if (action.includes(key)) {
        if (key === '%') {
            a = a / 100;
            out.textContent = a;
            return;
        }
        else if (key === '+/-') {
            a = -a;
            out.textContent = a;
            return;
        }
        else {
            sign = key;
            out.textContent = sign;
            return;
        }
    }


    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case '×':
                a = a * b;
                break;
            case '÷':
                if (b === '0') {
                    out.textContent = 'Error'
                    a = '';
                    b = '';
                    sign = '';
                    return
                }
                a = a / b;
                break;
        }

        finish = true
        out.textContent = a;
        console.log(a + '' + sign + '' + b);
    }
    
}

const changeColorButton = document.querySelector('.change-color');

const calculatorContainer = document.querySelector('.calculator');

changeColorButton.addEventListener('click', function() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`;

    calculatorContainer.style.backgroundColor = randomColor;
});

const changeButtonColorButton = document.querySelector('.change-button-color');

const calculatorButtons = document.querySelectorAll('.btn');

changeButtonColorButton.addEventListener('click', function() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`;

    calculatorButtons.forEach(button => {
        button.style.backgroundColor = randomColor;
    });
});

const calcScreen = document.getElementById('result');
const saveResultButton = document.querySelector('.save-result');

let savedResult = null;

saveResultButton.addEventListener('click', function() {
    savedResult = calcScreen.textContent;
    alert('Result saved: ' + savedResult);
});

const pasteResultButton = document.querySelector('.paste-result');

pasteResultButton.addEventListener('click', function() {
    if (savedResult !== null) {
        calcScreen.textContent = savedResult;
        alert('Result pasted: ' + savedResult);
    } else {
        alert('No saved result.');
    }
});


