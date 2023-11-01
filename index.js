let btns = document.getElementsByClassName("btn")
let result = document.getElementById("result")
let colors = document.getElementsByClassName("color")
let calculator = document.getElementById("calculator")
let copy = document.getElementById("copy")
let paste = document.getElementById("paste")

let copyValue = ""

copy.addEventListener("click", () => {
    copyValue = result.textContent
})

paste.addEventListener("click", () => {
   result.textContent += copyValue
})

for (let color of colors) {
  color.addEventListener("click", () => {
    calculator.className = color.classList[1]
  })
}

for (let btn of btns) {
    if (!Number.isNaN(parseInt(btn.textContent))) {
        btn.addEventListener("click", () => {
            result.textContent += btn.textContent
        })
    }

    if (btn.textContent === "AC") {
        btn.addEventListener("click", () => {
            result.textContent = ""
        })
    }

    if (btn.textContent === "+/-") {
        btn.addEventListener("click", () => {
            result.textContent = result.textContent * -1
        })
    }

    if (btn.textContent === "%") {
        btn.addEventListener("click", () => {
            result.textContent = result.textContent / 100
        })
    }

    if (btn.textContent === ".") {
        btn.addEventListener("click", () => {
            result.textContent += "."
        })
    }

    if (btn.textContent === "+" || btn.textContent === "*" || btn.textContent === "-" || btn.textContent === "/") {
        btn.addEventListener("click", () => {
            result.textContent += btn.textContent
        })
    }

    if (btn.textContent === "=") {
        btn.addEventListener("click", () => {
            result.textContent = Math.round(eval(result.textContent) * 100) / 100
        })
    }
}
