
let button = document.querySelector(".change");
let element1 = document.querySelectorAll(".color-number");
let element2 = document.querySelectorAll(".color-top ");
let element3 = document.querySelectorAll(" .color-right");
button.addEventListener('click', function() {
  let randomColor1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
  let randomColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
  let randomColor3 = '#' + Math.floor(Math.random() * 16777215).toString(16);
  element1.forEach(function(element) {
    element.style.background = randomColor1;
  });
  element2.forEach(function(element) {
      element.style.background = randomColor2;
  });
  element3.forEach(function(element) {
      element.style.background = randomColor3;
    }

  );
});

let a = "";
let b = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"]

const out = document.querySelector(".calc-screen p");

function clearAll() {
  let a = "";
  let b = "";
  let sign = "";
  let finish = false;
  out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll();

document.querySelector('.buttons').onclick = (event) => {
  if (!event.target.classList.contains("btn")) {
    return;
  }
  if (event.target.classList.contains(".as")) {
    return;
  }
  out.textContent = "";
  const key = event.target.textContent;

  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      out.textContent = a;
    }
    else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    }
    else {
      b += key;
      out.textContent = b;
    }
    console.log(a , b, sign);
    return;
  }

  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(a , b, sign);
    return;
  }

  if(key === "="){
    if(b === "") b = a;
    switch(sign){
      case "+":
        a = (+a) + (+b);
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
      case "/":
        if(b === "0"){
          out.textContent = "Помилка";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a/b;
        break;
    }
    finish = true;
    out.textContent = a;
    console.log(a , b, sign + " кінцева відповідь");

  }
}
