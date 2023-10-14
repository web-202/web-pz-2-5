class Calculator {
    constructor() {
      this.a = '';
      this.b = '';
      this.sign = '';
      this.finish = false;
  
      this.digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
      this.action = ['-', '+', '×', '÷', '%', '+/-'];
  
      this.out = document.querySelector('.calculator-display p');
      this.clearButton = document.querySelector('.AC');
      this.buttonsContainer = document.querySelector('.buttons');
  
      this.clearAll = this.clearAll.bind(this);
      this.handleButtonClick = this.handleButtonClick.bind(this);
  
      this.clearButton.onclick = this.clearAll;
      this.buttonsContainer.onclick = this.handleButtonClick;

      this.btnChangeColor = document.querySelector('.change-color');
      this.btnChangeColor.onclick = () => this.changeCalculatorColor();
    }
  
    clearAll() {
      this.a = '';
      this.b = '';
      this.sign = '';
      this.finish = false;
      this.out.textContent = 0;
      this.resultDisplayed = false;
    }
  
    handleButtonClick(event) {
      if (!event.target.classList.contains('btn')) return;
      if (event.target.classList.contains('AC')) return;
  
      this.out.textContent = '';
      const key = event.target.textContent;
  
      if (this.digit.includes(key)) {
        if (this.b === '' && this.sign === '') {
          this.a += key;
          this.out.textContent = this.a;
        } else if (this.a !== '' && this.b !== '' && this.finish) {
          this.b = key;
          this.finish = false;
          this.out.textContent = this.b;
        } else {
          this.b += key;
          this.out.textContent = this.b;
          return;
        }
      }
  
      if (this.action.includes(key)) {
        if (key === '%') {
          this.a = this.a / 100;
          this.out.textContent = this.a;
          return;
        } else if (key === '+/-') {
          this.a = -this.a;
          this.out.textContent = this.a;
          return;
        } else {
          this.sign = key;
          this.out.textContent = this.sign;
          return;
        }
      }
  
      if (key === '=') {
        if (this.b === '') this.b = this.a;
        switch (this.sign) {
          case '+':
            this.a = parseFloat(this.a) + parseFloat(this.b);
            break;
          case '-':
            this.a = parseFloat(this.a) - parseFloat(this.b);
            break;
          case '×':
            this.a = parseFloat(this.a) * parseFloat(this.b);
            break;
          case '÷':
            if (parseFloat(this.b) === 0) {
              this.out.textContent = 'Error';
              this.clearAll();
              return;
            }
            this.a = parseFloat(this.a) / parseFloat(this.b);
            break;
        }
  
        this.finish = true;
        this.out.textContent = this.a;
      }
    }

    saveResult() {
        this.savedResult = this.a;
    }

    pasteResult() {
        if (this.savedResult !== undefined) {
            if (this.b === '' && this.sign === '') {
                this.a += this.savedResult;
                this.out.textContent = this.a;
            } else if (this.a !== '' && this.b !== '' && this.finish) {
                this.b = this.savedResult;
                this.finish = false;
                this.out.textContent = this.b;
            } else {
                this.b += this.savedResult;
                this.out.textContent = this.b;
            }
        }
    }

    changeCalculatorColor() {
        const calculator = document.querySelector('.calculator');
        calculator.classList.toggle('alternative-color-scheme');
        console.log('Color changed');
    }
     
}
  
  const calculator = new Calculator();
  const btnSave = document.querySelector('.save');
  const btnPaste = document.querySelector('.paste');
  
  btnSave.onclick = () => calculator.saveResult();
  btnPaste.onclick = () => calculator.pasteResult();