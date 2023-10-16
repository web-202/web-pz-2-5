let a = "";
let b = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "×", "÷", "%", "+/-"];

const out = document.querySelector(".екран-калькулятора p");

function saveResult() {
    if (a !== "") {
        localStorage.setItem("calculatorResult", a);
    }
}

function pasteResult() {
    const savedResult = localStorage.getItem("calculatorResult");
    if (savedResult !== null) {
        a = savedResult;
        out.textContent = a;
    }
}

document.querySelector(".зберегти").onclick = saveResult;
document.querySelector(".вставити").onclick = pasteResult;

function clearAll() {
    a = "";
    b = "";
    sign = "";
    finish = false;
    out.textContent = "0";
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
    if (!event.target.classList.contains("кнопка")) return;
    if (event.target.classList.contains("ac")) return;
    if (finish) return;
    out.textContent = "";
    const key = event.target.textContent;

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
        }
    }

    if (action.includes(key)) {
        if (key === "%") {
            a = a / 100;
            out.textContent = a;
        } else if (key === "+/-") {
            a = -a;
            out.textContent = a;
        } else {
            sign = key;
            out.textContent = sign;
        }
    }

    if (key === "=") {
        if (b === "") b = a;
        switch (sign) {
            case "+":
                a = parseFloat(a) + parseFloat(b);
                break;
            case "-":
                a = parseFloat(a) - parseFloat(b);
                break;
            case "×":
                a = parseFloat(a) * parseFloat(b);
                break;
            case "÷":
                if (b === "0") {
                    out.textContent = "Error";
                    a = "";
                    b = "";
                    sign = "";
                    finish = true;
                    return;
                }
                a = parseFloat(a) / parseFloat(b);
                break;
        }

        finish = true;
        out.textContent = a;
    }
};
