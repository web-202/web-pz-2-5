const numbersBtn = document.querySelectorAll(".btn_number")
const actionsBtn = document.querySelectorAll(".btn_action")
const percentsBtn = document.querySelectorAll(".btn_percents")
const resultView = document.getElementById("result")
const calculateBtn = document.getElementById("=")
const clearBtn = document.getElementById("ac")

numbersBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    resultView.textContent += btn.id;
  })
})

actionsBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    resultView.textContent += btn.id;
  })
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




