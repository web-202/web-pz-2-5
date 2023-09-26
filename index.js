(function () {
  const calculatorDiv = document.querySelector(".calculator")
  const buttonsContainer = document.querySelector(".buttons");
  const result = document.querySelector(".calculator-input");
  const historyButton = document.querySelector(".history-button");
  const historyDiv = document.querySelector(".history");
  const actionElements = buttonsContainer.querySelectorAll('.action');
  const bgColorInput = document.querySelector("#bg-color-input")
  const textColorInput = document.querySelector("#text-color-input")

  let currentAction = null;
  let multiplyAction = null;
  let lastNumber = null;
  let isRemoved = false


  buttonsContainer.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("number")) {
      handleNumberClick(target.textContent);
    } else if (target.classList.contains("action")) {
      handleActionClick(target);
    } else if (target.id === "empty") {
      handleEmptyClick();
    } else if (target.id === "plus_minus") {
      handlePlusMinusClick();
    } else if (target.id === "percent") {
      handlePercentClick();
    } else if (target.id === "dot") {
      handleDotClick();
    } else if (target.id === "equal") {
      handleEqualClick();
    }
  });

  calculatorDiv.addEventListener("contextmenu", (event) => {
    event.preventDefault()
    const targetElement = event.target;
    targetElement.style.backgroundColor = bgColorInput.value;
    targetElement.style.color = textColorInput.value;
  })

  function handleNumberClick(number) {
    if (currentAction !== null && !isRemoved) {
      lastNumber = parseFloat(result.textContent)
      result.textContent = ""
      isRemoved = true
    }
    result.textContent = parseFloat(result.textContent + number).toString()
    checkFontSize()
  }

  function handleActionClick(button) {
    resetActions()
    isRemoved = false
    button.className += " active-action"
    let action = button.textContent

    if (action !== currentAction) {
      multiplyAction = null
    }

    if (action === "×") {
      action = "*"
    }

    if (action === "÷") {
      action = "/"
    }

    currentAction = action
  }

  function handleEmptyClick() {
    result.textContent = "0"
    currentAction = null
    lastNumber = null
    isRemoved = false
    resetActions()
    checkFontSize()
  }

  function handlePlusMinusClick() {
    result.textContent = (parseFloat(result.textContent) * -1).toString()
    checkFontSize()
  }

  function handlePercentClick() {
    result.textContent = (parseFloat(result.textContent) / 100).toString()
    checkFontSize()
  }

  function handleDotClick() {
    if (result.textContent.includes(".")) {
      return
    }
    result.textContent += "."
  }

  function handleEqualClick() {
    if (currentAction !== null && lastNumber !== null) {
      let res;
      if (multiplyAction !== null) {
        res = Math.round(eval(result.textContent + currentAction + multiplyAction) * 1000) / 1000
        createHistoryItem(result.textContent + currentAction + multiplyAction, res)
      } else {
        res = Math.round(eval(lastNumber + currentAction + result.textContent) * 1000) / 1000
        createHistoryItem(lastNumber + currentAction + result.textContent, res)
        multiplyAction = result.textContent
      }

      result.textContent = res.toString()
      checkFontSize()
    }
  }

  function createHistoryItem(equation, res) {
    let equationDiv = document.createElement("div")
    equationDiv.className = "equation"
    equationDiv.textContent = equation
    equationDiv.addEventListener("contextmenu", (event) => {
      event.preventDefault()
      navigator.clipboard.writeText(equation);
    })

    let resultDiv = document.createElement("div")
    resultDiv.className = "result"
    resultDiv.textContent = res

    resultDiv.addEventListener("dblclick", (event) => {
      event.preventDefault()
      navigator.clipboard.writeText(res);
    })

    resultDiv.addEventListener("click", (event) => {
      event.preventDefault()
      result.textContent = res
      checkFontSize()
    })

    let historyItem = document.createElement("div")
    historyItem.className = "history-item"

    historyItem.appendChild(equationDiv)
    historyItem.appendChild(resultDiv)
    historyDiv.prepend(historyItem)
  }

  function resetActions() {
    actionElements.forEach(x => {
      x.className = x.className.replace(" active-action", "")
    })
  }

  historyButton.addEventListener("click", () => {
    if (historyButton.textContent === "History") {
      buttonsContainer.style.display = "none"
      historyButton.textContent = "Back"
      historyDiv.style.display = "flex"
    } else {
      historyButton.textContent = "History"
      buttonsContainer.style.display = "grid"
      historyDiv.style.display = "none"
    }
  });

  function checkFontSize() {
    let fontSize = 80
    if (result.textContent === Infinity.toString() || result.textContent.length <= 8) {
      result.style.fontSize = fontSize + "px"
      return
    }

    let count = 1
    while (result.clientWidth > 367) {
      fontSize -= count;
      result.style.fontSize = fontSize + "px"
    }
  }
})();
