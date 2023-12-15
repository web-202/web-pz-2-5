let tsifra = document.getElementById('tsifra');
let val = '';
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
function cube() {
    if (val !== '') {
        val = Math.pow(parseFloat(val), 3).toString();
        tsifra.textContent = val;
    }
}
