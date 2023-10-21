let tsifra = document.getElementById('tsifra');
let val = '';
let x = '';
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

function makeminus() {
    if (val !== '') {
        val = (parseFloat(val) * -1).toString();
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

function calcul2() {   
       x  = eval(val).toString();  
}

function calcul3() {
    tsifra.textContent = x;
}

function changeInterfaceColor() {
    const randomColor = getRandomColor(); 
    document.querySelector('.calcul').style.backgroundColor = randomColor; 
    const buttons = document.querySelectorAll('.button');
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

