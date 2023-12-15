let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '×', '÷', '%', '+/-', 'Fi'];

const out = document.querySelector('.calc-screen p');

// Функція для очищення всіх полів
function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = '0';
}

// Функція для обчислення чисел Фібоначчі
function calculateFibonacciN(n) {
    let a = 0;
    let b = 1;
    let temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return a;
}

// Функція для обчислення чисел Фібоначчі
function calculateFibonacci() {
    const n = +a; // конвертуємо a в число
    const fibN = calculateFibonacciN(n);
    out.textContent = fibN;
    a = fibN.toString(); // оновлюємо a значенням числа Фібоначчі
    finish = true;
}

// Додаємо обробник для кнопки AC
document.querySelector('.ac').onclick = clearAll;

// Додаємо обробник подій для кнопок
document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
            return;
        }
    }

    if (action.includes(key)) {
        if (key === '%') {
            a = a / 100;
            out.textContent = a;
            return;
        } else if (key === '+/-') {
            a = -a;
            out.textContent = a;
            return;
        } else if (key === 'Fi') {
            if (a !== '' && b === '' && sign === '' && !finish) {
                calculateFibonacci();
            }
            return;
        } else {
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

        finish = true;
        out.textContent = a;
    }
};
