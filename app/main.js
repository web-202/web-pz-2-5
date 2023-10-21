let a = "";
let b = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "×", "÷", "%", "+/-"];

const out = document.querySelector(".calc-screen p");

// Function to save result to LocalStorage
function saveResult() {
  if (a !== "") {
    localStorage.setItem("calculatorResult", a);
    console.log("Result saved to LocalStorage:", a);
  }
}

// Function to paste result from LocalStorage
function pasteResult() {
  const savedResult = localStorage.getItem("calculatorResult");
  if (savedResult !== null) {
    a = savedResult;
    out.textContent = a; // Update the calculator screen
    console.log("Result pasted from LocalStorage:", a);
  }
}

// Event listeners for Save and Paste buttons
document.querySelector(".save").onclick = saveResult;
document.querySelector(".paste").onclick = pasteResult;

//Clear all
function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false
  out.textContent = 0;
}

//Add Clear all
document.querySelector(".ac").onclick = clearAll;

//Use button
document.querySelector(".buttons").onclick = (event) => {
  //Click a not button
  if (!event.target.classList.contains("btn")) return;
  //Click a button clearAll
  if (event.target.classList.contains("ac")) return;
  if (finish) return;
  out.textContent = "";
  //Get clicked button
  const key = event.target.textContent;

  //If clicked 0-9 or .
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
      return;
    }
  }

  //If clicked + - * / or % or +/-
  if (action.includes(key)) {
    if (key === "%") {
      a = a / 100;
      out.textContent = a;
      return;
    } else if (key === "+/-") {
      a = -a;
      out.textContent = a;
      return;
    } else {
      sign = key;
      out.textContent = sign;
      return;
    }
  }

  //Clicked =
  if (key === '=') {
   
    switch (sign) {
        case '+':
            a = +a + +b;
            break;
        case '-':
            a = a - b;
            break;
        case '×':
            a = a * b;
            break;
        case '÷':
            if (b === '0') {
                out.textContent = 'Error';
                a = '';
                b = '';
                sign = '';
                isEqualButtonPressed = true; // Set the flag
                return;
            }
            a = a / b;
            break;
    }

    finish = true;
    out.textContent = a;
    console.log(a + "" + sign + "" + b);
  }

  function toBinary() {
    if (a !== "") {
        const binaryValue = (+a).toString(2);
        out.textContent = binaryValue;
        
    }
}

document.querySelector('.to-binary').onclick = toBinary;
};
