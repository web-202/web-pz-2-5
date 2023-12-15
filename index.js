const output = document.getElementById('output')
let firstNumber = 0;
let sign = ''

function clearOutput() {
    output.innerHTML = "0";
}

function plusMinus() {
    let number = parseFloat(output.innerHTML)
    number *= -1
    output.innerHTML = number.toString()
}

function addNumber(number) {
    if (sign !== '' && firstNumber === 0) {
        firstNumber = parseFloat(output.innerHTML)
        output.innerHTML = "0"
    }

    let numberStr = output.innerHTML
    if (numberStr === "0") {
        output.innerHTML = number.toString()
        return
    }

    output.innerHTML = numberStr + number.toString()
}

function doPercent() {
    let number = parseFloat(output.innerHTML)
    output.innerHTML = (number / 100).toString()
}

function setSign(signToSet) {
    sign = signToSet
}

function setDot() {
    if (!output.innerHTML.includes('.')) {
        output.innerHTML += '.'
    }
}

function calc() {
    output.innerHTML = eval(firstNumber + sign + output.innerHTML)

    sign = ''
    firstNumber = 0
}

async function copyValue() {
    await navigator.clipboard.writeText(output.innerHTML)
}

async function pasteValue() {
    let data = await navigator.clipboard.readText()
    output.innerHTML = data
}

function changeClass(input, className) {
    var r = document.querySelector(':root');
    r.style.setProperty('--' + className, input.value);
}

function calculateArcCos() {
    let number = parseFloat(output.innerHTML);
    // Використовуйте Math.acos для обчислення арккосинуса в радіанах
    let resultInRadians = Math.acos(number);
    // Перетворення результату в градуси
    let resultInDegrees = (resultInRadians * 180) / Math.PI;
    output.innerHTML = resultInDegrees.toString();
}
