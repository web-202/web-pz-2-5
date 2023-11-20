document.getElementById('whiteThema').onclick = () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    document.querySelector('.calculator-body').style.backgroundColor = 'white';
    document.querySelector('.calculator-body').style.borderColor = 'black';
    document.querySelector('.calculator-output-text').style.color = 'black';
    localStorage.setItem('theme', 'light');
};

document.getElementById('darkThema').onclick = () => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.querySelector('.calculator-body').style.backgroundColor = 'black';
    document.querySelector('.calculator-body').style.borderColor = 'white';
    document.querySelector('.calculator-output-text').style.color = 'white';
    localStorage.setItem('theme', 'dark');
};

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.getElementById('whiteThema').click();
} else {
    document.getElementById('darkThema').click();
}



let a = ''
let b = ''
let operation = ''
let result = false

const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const operator = ['+', '-' , '×' , '/']

const output = document.querySelector('.calculator-output-text')

function clear() {
    a=''
    b=''
    operation=''
    result=false
    output.textConten=0
}
document.querySelector('.ln1-1').onclick = clear

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('button')) return
    if(event.target.classList.contains('.ln1-1')) return
    output.textContent=''
    const key = event.target.textContent



    if(number.includes(key)){
        if (b==='' && operation===''){
            a+=key
            output.textContent=a
        }
        else if(a!=='' && b!=='' && result){
            b=key
            result=false
            output.textContent = b
        }
        else{
            b+=key
            output.textContent=b
        }
        console.log(a,b,operation)
        return
    }
    
    if(operator.includes(key)){
        operation = key
        output.textContent = operation
        console.log(a,b,operation)
        return
    }

    if(key==='='){
        if(b===''){
            b=a
        }
        switch(operation){
            case "+":
                a = (+a) + (+b)
                break
            case "-":
                a = a - b
                break
            case "×":
                a = a * b
                break
            case "/":
                a = a / b
                break  
        }
        result = true
        output.textContent = a
        console.table(a,b,operation)
    }
}

