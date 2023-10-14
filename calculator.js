let a='';
let b='';
let sing='';
let finish=false;


const digit =['0','1','2','3','4','5','6','7','8','9','.'];
const alt =['*','/','-','+','%'];

const out= document.querySelector('.win');

function clearAll(){
  a='';
  b='';
  sing='';
  finish=false;
  out.textContent=0;
}

document.querySelector('.clearDisplay').onclick =clearAll;

document.querySelector('.buttons').onclick = (event) =>{
 if(!event.target.classList.contains('button'))return;

 out.textContent =' '; 
 const key = event.target.textContent;

 if(digit.includes(key)){
    if(b==='' && sing === ''){
      a+=key;
      out.textContent =a;

    }
    else if( a!=='' && b!=='' && finish){}
    else{
      b +=key;
      out.textContent =a;
    }
    console.log(a,b, sing);
    return;
  }

  if(alt.includes(key)){
    sing = key;
    out.textContent = sing;
    console.log(a,b,sing);
    return;
  }

 if(key === '='){
  switch(sing){
    case "+":
      a = (+a) +(+b);
      break;
      case "-":
        a = a-b;
      break;
      case "*":
          a = a*b;
      break;
      case "/":
        if( b===0){
          out.textContent='erorr';
          a='';
          b='';
          sing='';
          return;
        }
        a = a/b;
      break;
      case "%":
        a= a/100;
        break;
  }
  finish=true;
  out.textContent=a;
  console.log(a,b,sing)
 }

}
