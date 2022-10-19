const el = document.querySelector.bind(document);

const newMatch = document.getElementById('new-match');
const btnPlay = document.getElementById('gioca-utente');
const min = 1;
const max = 5;

let counterBtn=0;

//esegue la funzione play e assegna il valore 1 a counterBtn in modo da sapere che è già stata giocata una partita
btnPlay.addEventListener('click', function(){
  play();
  counterBtn = 1;
});

document.addEventListener('keypress', (event)=>{
  let keyCode = event.keyCode;

  // se viene premuto enter
  if(keyCode === 13) {
    //se il contatore ha valore 0 vuol dire che non è ancora stata avviata la partita quindi esegue l'evento click di btnPlay
    if(counterBtn=== 0){
      // call click function of the buttonn 
      btnPlay.click();
      counterBtn = 1;
    } else {
      //se il contatore ha valore 1 vuol dire che è già stata giocata la partita quindi esegue l'evento click di newMatch
      newMatch.click();
      counterBtn = 0;
    }
  }
});

//esegue un reset della pagina per giocare una nuova partita
newMatch.addEventListener('click', function(){
  document.getElementById('esito').classList.add('d-none');
  document.getElementById('n-pc').classList.add('d-none');
  btnPlay.classList.remove('d-none');
  counterBtn = 0;
});

//esegue il gioco
function play () {
  let output;

  //legge il numero inserito dall'utente e l'opzione scelta
  const userNumber = parseInt(el('#user-number').value);
  const userOption = el('#pari-dispari').value;
  
  //genera e scrive il numero del pc
  const pcNumber = getRndInteger(min,max);
  document.getElementById('n-pc').classList.remove('d-none');
  innerTextById('n-pc', pcNumber);

  //esegue la somma e controlla se è pari
  const somma = pcNumber + userNumber;
  const pari= evenControl(somma);

  //se la somma dei due numeri è pari e l'utente ha scelto pari o se la somma dei due numeri è dispari e l'utente ha scelto dispari vince l'utente altrimenti il pc
  if ((pari === true && userOption === "pari") || (pari === false && userOption === "dispari")) {
    output = "Vince l'utente";
  } else {
    output = "Vince il pc";
  }

  //stampa l'esito
  innerTextById('esito', output);
  document.getElementById('esito').classList.remove('d-none');

  //nasconde il bottone "Gioca"
  btnPlay.classList.add('d-none');
}


//genera e restituisce un numero intero tra min e max
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//controlla se il numero è pari; se il numero è pari restituisce true altrimenti false
function evenControl(n) {
  let pari = true;

  if(n % 2 !== 0){
    pari = false;
  }
  
  return pari;
}

//fa un innerText di "content" nell'elemento con id "id"
function innerTextById(id, content) {
  document.getElementById(id).innerText = content;
}