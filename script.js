let resultArray = []
let resultStorage = []

function clearDisplay() {
    document.getElementById('result').value = '0';
}

function appDisplay(value) {
    const display = document.getElementById('result');
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function toggleSign() {
    const display = document.getElementById('result');
    display.value = -parseFloat(display.value);
}

function calculatePercentage() {
    const display = document.getElementById('result');
    display.value = parseFloat(display.value) / 100;
}

function calculate() {
    const display = document.getElementById('result');
    try {
        display.value = eval(display.value);

    } catch (error) {
        display.value = 'Error';
    }
}

const savedData = JSON.parse(localStorage.getItem("result-data"));
const list = document.getElementById("result-data");
console.log(savedData);
if (savedData) {
    list.innerHTML = ''
    savedData.forEach(function (item) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    });
}

$('#btnSaved').click(function () {

    const display = document.getElementById('result');
    try {
        if (localStorage.getItem("result-data") !== null) {
            let arrayStorage = JSON.parse(localStorage.getItem("result-data"));
            display.value = eval(display.value);
            resultArray.push(display.value);
            arrayStorage.push(...resultArray);
            console.log(resultArray);
            console.log(arrayStorage);
            localStorage.setItem('result-data', JSON.stringify(arrayStorage))
            resultArray = []
        } else if (localStorage.getItem("result-data") === null) {
            display.value = eval(display.value);
            resultArray.push(display.value);
            console.log(resultArray);
            localStorage.setItem('result-data', JSON.stringify(resultArray))
            resultArray = []
        }

        const savedData = JSON.parse(localStorage.getItem("result-data"));
        const list = document.getElementById("result-data");
        console.log(savedData);
        if (savedData) {
            list.innerHTML = ''
            savedData.forEach(function (item) {
                const listItem = document.createElement("li");
                listItem.textContent = item;
                list.appendChild(listItem);
            });
        }
    } catch (error) {
        display.value = 'Error';
    }
})

$('#data-result-saved-clear').click(function () {
    localStorage.removeItem('result-data')
    const list = document.getElementById("result-data");
    list.innerHTML = ''
})

$('#btnPaste').click(function () {
    let arrayStorage = JSON.parse(localStorage.getItem("result-data"));
    const display = document.getElementById('result');
    display.value = arrayStorage[arrayStorage.length - 1];

})


let bool = true;
$('#colorMode').click(function () {
    if (bool === false) {
        $("#division, #multi, #add, #sub, #exa").removeClass('colorBtn').addClass('operation');
        $('#7, #8, #9, #1, #2, #3, #4, #5, #6, #frag').removeClass('sizeBtn').addClass('sizeButton');
        $('#AC, #interest, #negativeAndPositive').removeClass('appBtn').addClass('appButton');
        $('#0').removeClass('btn0').addClass('button0');
        bool = true;
    } else {
        $("#division, #multi, #add, #sub, #exa").removeClass('operation').addClass('colorBtn');
        $('#7, #8, #9, #1, #2, #3, #4, #5, #6, #frag').removeClass('sizeButton').addClass('sizeBtn')
        $('#AC, #interest, #negativeAndPositive').removeClass('appButton').addClass('appBtn');
        $('#0').removeClass('button0').addClass('btn0');
        bool = false;
    }
})

