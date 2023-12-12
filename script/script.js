const allNumberButton = document.querySelectorAll('.calculate_number')
const outputLink = document.querySelector('.output')

let oldParams = localStorage.getItem('userInput');
if(oldParams){
    outputLink.textContent = oldParams
}

const currentTimeStamp = Date.now();
const dateObject = new Date(currentTimeStamp);

const hours = dateObject.getHours();
const minutes = dateObject.getMinutes();
document.querySelector('.time').textContent = `${hours}:${minutes}`

let mathOperation, pastValue, outText = ''

document.getElementById('plus').addEventListener('click', () => changeOperation('+'))
document.getElementById('minus').addEventListener('click', () => changeOperation('-'))
document.getElementById('multiplication').addEventListener('click', () => changeOperation('*'))
document.getElementById('divide').addEventListener('click', () => changeOperation('/'))
document.getElementById('percentage').addEventListener('click', () => {
    if(outputLink.textContent.slice(-1) === ',' || outputLink.textContent === '0') return
    console.log(Math.round((parseFloat(outputLink.textContent) * 0.1) * 100) / 100);
    outputLink.textContent = (parseFloat(outputLink.textContent) * 0.1).toFixed(10).toString().replace(/0*$/,"")
})
document.getElementById('result').addEventListener('click', () => {
    outLink = outputLink.textContent
    if (mathOperation === '' || pastValue === '') return
    if (pastValue.includes(',')) pastValue = parseFloat(pastValue.replace(',', '.'))
    if (outLink.includes(',')) outLink = parseFloat(outLink.replace(',', '.'))
    let result = eval(pastValue + mathOperation + outLink)
    outputLink.textContent = result.toString().length > 5 ? result.toFixed(6).toString().replace('.', ',') : result.toString().replace('.', ',')
    mathOperation, pastValue = ''
})
document.getElementById('clear').addEventListener('click', () => {
    outputLink.textContent = '0'
    allNumberButton.forEach(item => item.textContent == ',' && item.addEventListener('click', () => eventOutput(item), { once: true }))
})
document.getElementById('plus-minus').addEventListener('click', () => {
    console.log(parseInt(outputLink.textContent))
    if (parseInt(outputLink.textContent) <= 0) return
    outputLink.textContent = '-' + outputLink.textContent
})

const changeOperation = (newValue) => {
    mathOperation = newValue
    pastValue = outputLink.textContent
    allNumberButton.forEach(item => item.textContent == ',' && item.addEventListener('click', () => eventOutput(item), { once: true }))
}
const eventOutput = (item) => {
    if (mathOperation != '' && outputLink.textContent != '0,' && pastValue == outputLink.textContent) {
        outputLink.textContent = '0'
    }
    outText = outputLink.textContent
    itemText = item.textContent
    if (outText.includes(',') && itemText == ',') return
    if (outText.slice(-1) === ',' && itemText === ',') return;
    outText = (outText.trim() == '0' && itemText != ',') ? itemText : outText + itemText
    outputLink.textContent = outText
}
allNumberButton.forEach(item => {
    item.addEventListener('click', () => {
        eventOutput(item)
    }, item.textContent == ',' && { once: true })
}) 

function handlePageClose(event) {
    localStorage.setItem('userInput', outputLink.textContent);
}

// Додаємо обробник події beforeunload до вікна
window.addEventListener('beforeunload', handlePageClose);

let copyLink
document.getElementById('copy').addEventListener('click',()=>{
    copyLink = outputLink.textContent
})
document.getElementById('paste').addEventListener('click',()=>{

    outputLink.textContent = copyLink
})

const randomColor = () =>{
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ',' + green + ',' + blue + ')'
}
document.getElementById('switch-theme').addEventListener('click',()=>{
    document.querySelectorAll('.calculate__row>div').forEach(element => {
        element.style.backgroundColor = randomColor()
        
    });
})



