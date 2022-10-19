const el = document.querySelector.bind(document);


const verifyButton = el('#verifica');

verifyButton.addEventListener('click', function(){

  word= readValueById("input-word");

  const palindromo= verifyPalindormo(word);
    
  const outputSpan= el('#output');
  outputSpan.classList.remove('d-none');
  
  if (palindromo === true) {
    outputSpan.innerText = "La parola è palindroma";
  } else {
    outputSpan.innerText = "La parola non è palindroma";
  }
});


function readValueById (id) {
  return el('#'+ id).value;
}

function verifyPalindormo (word) {
  let i=0
  let palindromo=true;

  while(i < (word.length / 2) &&  palindromo === true) {
    if(word[i] !== word[word.length - 1 - i]){
      palindromo = false;
    }
    i++;
  }

  return palindromo;
}