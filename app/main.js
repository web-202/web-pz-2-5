let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '×', '÷', '%', '+/-'];

const out = document.querySelector('.calc-screen p');


//Clear all 
function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

//Add Clear all 
document.querySelector('.ac').onclick = clearAll;

//Use button
document.querySelector('.buttons').onclick = (event) => {
    //Click a not button
    if (!event.target.classList.contains('btn')) return;
    //Click a button clearAll
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
    //Get clicked button
    const key = event.target.textContent;

    //If clicked 0-9 or .
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

    //If clicked + - * / or % or +/-
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


    //Clicked =
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

