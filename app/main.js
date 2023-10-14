let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '×', '÷', '%', '+/-'];

const out = document.querySelector('.calc-screen p');
const resultDiv = document.getElementById('result');
const saveButton = document.getElementById('saveButton');
const pasteButton = document.getElementById('pasteButton');

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
        debugger
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
            finish = false
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
        debugger
        if (!a || !b) {
            out.textContent = a ? a : 0
            return;
        } 
        debugger
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
        b=''
        console.log(a + '' + sign + '' + b);
    }
}

saveButton.addEventListener('click', () => {
    savedResult = out.textContent;
    alert('Результат збережено!');
});


pasteButton.addEventListener('click', () => {
    if (savedResult !== undefined) {
        out.textContent = savedResult;
        debugger
        if(!a) {
            a = savedResult
        } else {
            b = savedResult
        }
        
    }
});