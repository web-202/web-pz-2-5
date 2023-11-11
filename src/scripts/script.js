document.addEventListener("DOMContentLoaded", function () {

    let currentInput = "";
    let previousInput = "";
    let currentOperator = "";

    // Create main calculator container
    const calculator = document.createElement('div');
    calculator.className = 'calculator';
    document.body.appendChild(calculator);

    // Create screen
    const screen = document.createElement('div');
    screen.className = 'screen';
    screen.textContent = getCookie("calcValue") || '0';
    calculator.appendChild(screen);

    // Create keys
    const keys = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const keysContainer = document.createElement('div');
    keysContainer.className = 'keys';
    calculator.appendChild(keysContainer);

    keys.forEach(key => {
        const btn = document.createElement('button');
        btn.className = determineClass(key);
        btn.textContent = key;
        btn.dataset.value = determineDataValue(key);
        keysContainer.appendChild(btn);
    });

    // Apply styles
    applyStyles();

    // Event listeners
    keysContainer.addEventListener('click', function (e) {
        const btn = e.target;
        const value = btn.dataset.value;

        if (!value) return;

        if (btn.classList.contains('func')) {
            handleFunction(value);
        } else if (btn.classList.contains('op')) {
            handleOperation(value);
        } else {
            handleNumber(value);
        }

        screen.textContent = currentInput || previousInput || '0';

        // Saving the current value to cookies
        setCookie("calcValue", screen.textContent, 1);
    });

    function handleNumber(value) {
        currentInput += value;
    }

    function handleFunction(value) {
        if (value === 'AC') {
            currentInput = '';
            previousInput = '';
            currentOperator = '';
        } else if (value === '+/-') {
            currentInput = (parseFloat(currentInput) * -1).toString();
        } else if (value === '%') {
            currentInput = (parseFloat(currentInput) / 100).toString();
        }
    }

    function handleOperation(value) {
        if (currentOperator) {
            previousInput = operate(currentOperator, parseFloat(previousInput), parseFloat(currentInput)).toString();
        } else {
            previousInput = currentInput;
        }
        currentOperator = value;
        currentInput = '';
    }

    function operate(operator, a, b) {
        switch (operator) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return a / b;
            default:
                return a;
        }
    }

    function determineClass(key) {
        if (['AC', '+/-', '%'].includes(key)) return 'btn func';
        if (['/', 'x', '-', '+', '='].includes(key)) return 'btn op';
        if (key === '0') return 'btn zero';
        return 'btn';
    }

    function determineDataValue(key) {
        if (key === 'x') return '*';
        if (key === '-') return '-';
        if (key === '/') return '/';
        return key;
    }
    function applyStyles() {
        let calcWidth = '240px';
        let calcFontSize = '24px';
        let screenFontSize = '36px';
        let btnWidth = '50px';
        let btnHeight = '50px';
        let zeroBtnWidth = '110px';

        // Adjust styles for smaller screens
        if (window.innerWidth < 480) {
            calcWidth = '90%';
            calcFontSize = '32px';
            screenFontSize = '48px';
            btnWidth = '70px';
            btnHeight = '70px';
            zeroBtnWidth = '150px';
        }

        // Styles for the calculator
        calculator.style.width = calcWidth;
        calculator.style.backgroundColor = '#0E5E3E';
        calculator.style.borderRadius = '10px';
        calculator.style.boxShadow = '0 0 65px rgba(100, 100, 0, 0.8)';
        calculator.style.padding = '30px';
        calculator.style.fontFamily = 'Arial, sans-serif';
        calculator.style.margin = 'auto';
        calculator.style.maxWidth = '300px';

        // Styles for the screen
        screen.style.fontSize = screenFontSize;
        screen.style.backgroundColor = 'black';
        screen.style.border = 'none';
        screen.style.color = 'white';
        screen.style.textAlign = 'right';
        screen.style.padding = '10px 20px';
        screen.style.borderRadius = '10px';
        screen.style.marginBottom = '20px';
        screen.style.userSelect = 'none';

        // Styles for the keys
        keysContainer.style.display = 'grid';
        keysContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
        keysContainer.style.gap = '10px';

        // Generic button styles
        const buttons = keysContainer.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.style.fontFamily = 'Arial, sans-serif';
            btn.style.fontSize = calcFontSize;
            btn.style.borderRadius = '100%';
            btn.style.width = btnWidth;
            btn.style.height = btnHeight;
            btn.style.border = 'none';
            btn.style.cursor = 'pointer';
            btn.style.transition = 'background-color 0.3s';
        });

        // Zero button
        const zeroBtn = keysContainer.querySelector('.zero');
        zeroBtn.style.gridColumn = 'span 2';
        zeroBtn.style.borderRadius = '50px';
        zeroBtn.style.width = zeroBtnWidth;

        // Functional button styles
        const funcBtns = keysContainer.querySelectorAll('.func');
        funcBtns.forEach(btn => {
            btn.style.backgroundColor = 'grey';
            btn.style.color = 'black';
        });

        // Operator button styles
        const opBtns = keysContainer.querySelectorAll('.op');
        opBtns.forEach(btn => {
            btn.style.backgroundColor = '#FF9F0A';
            btn.style.color = 'white';
        });
    }


    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
});
