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


function factorial(n) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else if (n > 1) {
    for (let i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  } else {
    alert("Number must be positive")
  }
}

factorialBtn.addEventListener("click", () => {
  resultView.textContent = factorial(Number(resultView.textContent))
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




