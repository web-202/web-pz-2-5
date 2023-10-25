const numbersBtn = document.querySelectorAll(".button_numb")
const actionsBtn = document.querySelectorAll(".button_act")
const percentsBtn = document.querySelectorAll(".button_percents")
const resultView = document.getElementById("result")
const calculateBtn = document.getElementById("=")
const clearBtn = document.getElementById("AC")
let savedValue = '';
const saveBtn = document.getElementById("save");
const pasteBtn = document.getElementById("paste");
saveBtn.addEventListener("click", () => {
  savedValue = resultView.textContent;
})
pasteBtn.addEventListener("click", () => {
  resultView.textContent += savedValue;
})
const themeSwitcher = document.querySelector('.theme-switcher');

numbersBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    resultView.textContent += btn.id;
  })
})

actionsBtn.forEach(btn => {
  if (btn.id !== "!") {
    btn.addEventListener("click", () => {
      resultView.textContent += btn.id;
    })
  }
})


function calculateFactorial(n) {
  if (n < 0) {
    return "NaN";
  }

  const result = [1];

  for (let i = 2; i <= n; i++) {
    multiply(result, i);
  }
  return result.join("");
}

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


percentsBtn.forEach(btn => {
  btn.addEventListener("click", () => {

  })
})

themeSwitcher.addEventListener('change', evt => {
    document.body.className = evt.target.id;
  })


