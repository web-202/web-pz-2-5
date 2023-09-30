const numbersBtn = document.querySelectorAll(".btn_number")
const actionsBtn = document.querySelectorAll(".btn_action")
const percentsBtn = document.querySelectorAll(".btn_percents")
const resultView = document.getElementById("result")
const calculateBtn = document.getElementById("=")
const clearBtn = document.getElementById("ac")
const factorialBtn = document.getElementById("!")

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
    return "NaN"; // Factorial is undefined for negative numbers
  }

  const result = [1];

  for (let i = 2; i <= n; i++) {
    multiply(result, i);
  }
  return result.reverse().join("");
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

factorialBtn.addEventListener("click", () => {
  resultView.textContent = calculateFactorial(Number(resultView.textContent))
})

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




