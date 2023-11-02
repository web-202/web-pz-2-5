const numbersBtn = document.querySelectorAll(".button_numb")
const actionsBtn = document.querySelectorAll(".button_act")

const resultView = document.getElementById("result")
const calculateBtn = document.getElementById("=")
const clearBtn = document.getElementById("AC")
let savedValue = '';
const themeSwitcher = document.querySelector('.theme-switcher');

const saveBtn = document.getElementById("save");
const pasteBtn = document.getElementById("paste");

const negateBtn = document.getElementById("negate");
const percentBtn = document.getElementById("percent");

negateBtn.addEventListener("click", () => {
    if (resultView.textContent === "") {
        return; 
    }

    
    if (resultView.textContent.charAt(0) === '-') {
        resultView.textContent = resultView.textContent.slice(1); 
    } else {
        resultView.textContent = '-' + resultView.textContent; 
    }
});

percentBtn.addEventListener("click", () => {
    if (resultView.textContent === "") {
        return; 
    }

    const currentValue = parseFloat(resultView.textContent);
    const percentageValue = currentValue / 100;

    resultView.textContent = percentageValue;
});



numbersBtn.forEach(btn => {
  btn.addEventListener("click", () => {
  
    if(btn.id !== "save" && btn.id !== "paste") {
      resultView.textContent += btn.id;
    }
  })
})

saveBtn.addEventListener("click", () => {
  
  savedValue = resultView.textContent;
})
pasteBtn.addEventListener("click", () => {
  resultView.textContent += savedValue;
})

actionsBtn.forEach(btn => {
  if (btn.id !== "!") {
    btn.addEventListener("click", () => {
      if(btn.id !== "save" && btn.id !== "paste") {
      resultView.textContent += btn.id;
      }
    })
  }
})




function multiply(arr, multiplier) {
  let carry = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    const product = arr[i] * multiplier + carry;
    arr[i] = product % 10;
    carry = Math.floor(product / 10);
  }

  while (carry > 0) {
    arr.unshift(carry % 10);
    carry = Math.floor(carry / 10);
  }
}



calculateBtn.addEventListener("click", () => {
  resultView.textContent = eval(resultView.textContent);
})

clearBtn.addEventListener("click", () => {
  resultView.textContent = "";
})



themeSwitcher.addEventListener('change', evt => {
    document.body.className = evt.target.id;
  })


