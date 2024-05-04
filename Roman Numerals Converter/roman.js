const input = document.getElementById('number');
const button = document.getElementById('convert-btn');
const output = document.getElementById('output');
button.addEventListener('click',checking);

function checking(){
  output.classList.add('hidden1');
  let value = input.value;
  if(!value){
    output.innerHTML = "Please enter a valid number";
    return;
  }
  if(value <= -1){
    output.innerHTML ="Please enter a number greater than or equal to 1";
    return;
  }
  if(value >= 4000){
    output.innerHTML ="Please enter a number less than or equal to 3999";
    return;
  }
  arabicRoman(value);
  return;
}

function arabicRoman(num){
  const romanNumerals ={
    M : 1000,
    CM : 900,
    D : 500,
    CD : 400,
    C :100,
    XC : 90,
    L : 50,
    XL : 40,
    X : 10,
    IX : 9,
    V : 5,
    IV : 4,
    I :1
  }
  let roman ='';
  for(let key in romanNumerals){
while( num >= romanNumerals[key]){
roman += key;
num -= romanNumerals[key];
}

  }
output.innerHTML = roman;
return;
}
