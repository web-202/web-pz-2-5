let screen = document.querySelector('#screen');
let currentInput = [];
let savedInput = '';

function appendToScreen(value) {
    if (currentInput.length === 0) {
        currentInput.push(value);
    } else if (isNaN(value) && isNaN(currentInput[currentInput.length - 1])) {
        currentInput[currentInput.length - 1] = value;
    } else {
        currentInput.push(value);
    }
    screen.textContent = currentInput.join('');
}

function clearScreen() {
    currentInput = [];
    screen.textContent = '0';
}

function calculate() {
    if (currentInput.length > 0 && !isNaN(currentInput[currentInput.length - 1])) {
        const expression = currentInput.join('');
        try {
            currentInput = [eval(expression).toString()];
            screen.textContent = currentInput[0];
        } catch (error) {
            screen.textContent = 'Error';
        }
    }
}

function copyToClipboard() {
    savedInput = currentInput.join('');
    navigator.clipboard.writeText(savedInput)
        .then(() => {
            alert('Expression copied to clipboard: ' + savedInput);
        })
        .catch(() => {
            alert('Copy to clipboard failed');
        });
}

function pasteFromClipboard() {
    if (savedInput !== '') {
        currentInput = currentInput.concat(savedInput.split(''));
        screen.textContent = currentInput.join('');
    }
}