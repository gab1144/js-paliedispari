const el = document.querySelector.bind(document);
const verifyButton = el('#verifica');
const resetButton = el('#reset');
let counterBtn=0;

//esegue la funzione palindromoMainFunction e assegna il valore 1 a counterBtn in modo da sapere che è già stata giocata una partita
verifyButton.addEventListener('click', function(){
  palindromoMainFunction();
  counterBtn = 1;
});

document.addEventListener('keypress', (event)=>{
  let keyCode = event.keyCode;

  // se viene premuto enter
  if(keyCode === 13) {
    //se il contatore ha valore 0 vuol dire che non è ancora stato verificato che una parola è palindroma quindi esegue l'evento click di verifyButton
    if(counterBtn=== 0){
      // call click function of the buttonn 
      verifyButton.click();
      counterBtn = 1;
    } else {
      //se il contatore ha valore 1 vuol dire che è già stato verificato che una parola è palindroma quindi esegue l'evento click di resetButton
      resetButton.click();
      counterBtn = 0;
    }
  }
});

resetButton.addEventListener('click', function(){
  //resetta il campo di input e nasconde lo span dell'output
  document.getElementById('input-word').value="";
  document.getElementById('output').classList.add('d-none');
  counterBtn=0;
});


function palindromoMainFunction () {
  word= readValueById("input-word");
  if(word !== ""){  //verifica che sia stata digitata una parola
    const palindromo= verifyPalindormo(word); //verifica che la parola sia parlindroma
    
    //mostra lo span per stampare e visualizzare l'output
    const outputSpan= el('#output');
    outputSpan.classList.remove('d-none');
    
    if (palindromo === true) {   //se è palindroma
      outputSpan.innerText = "La parola è palindroma";
    } else {
      outputSpan.innerText = "La parola non è palindroma";
    }
  } else {
    alert("Devi inserire una parola");
  }
}

//legge e restituisce il valore di un elemento sulla base del suo id
function readValueById (id) {
  return document.getElementById(id).value;
}

//verifica che la parola resituita sia palindroma: se è così restituisce true altrimenti false
function verifyPalindormo (word) {
  let i=0
  let palindromo=true;

  while(i < (word.length / 2) &&  palindromo === true) {  //il ciclo viene ripetuto fino a che il contatotre è minore della metà della lunghezza della 
                                                          //parola o finchè i caratteri controllati sono sono uguali
    if(word[i] !== word[word.length - 1 - i]){  //verifica che il primo è l'ulitmo carattere, il secondo e il penultimo carattere... siano diversi
      palindromo = false;   //se sono diversi palindromi assume il valore di false
    }

    i++;
  }

  return palindromo;
}