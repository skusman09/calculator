let arg = '';
let arg1 = '';
let operator = '';
let result;
let display = document.querySelector(".display")
const add = (x) =>{
  arg = arg.concat(x)
  display.innerHTML = arg ;
}
const ac = () => {
  arg='';
  display.innerHTML = '';
}

const ope = (x) => {
  arg1 = Number.parseInt(arg);
operator = x ; 
arg = '';
display.innerHTML = '';
}
const results = () =>{
  arg = Number.parseInt(arg);
  if(operator == '+'){
    result =  arg1 + arg ;
    arg = result
    return display.innerHTML = result ;
  } else
  if(operator == '-'){
    result =  arg1 - arg ;
    arg = result
    return display.innerHTML = result ;
  }else
  if(operator == '*'){
    result =  arg1 * arg ;
    arg = result
    return display.innerHTML = result ;
  }else
  if(operator == '/'){
    result =  arg1 / arg ;
    arg = result
    return display.innerHTML = result ;
  }
}

