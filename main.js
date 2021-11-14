//caching the DOM elements
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score'); //DOM variables (with the SPAN)
const computerScore_span = document.getElementById('comp-score'); //DOM variables (with the SPAN)
let actionMessage = document.getElementById('action-message');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p'); //vezme "p" tag, který je v "result" (bez toho by bylo hnusné formátování textu v hlášce)
const rock_div = document.getElementById('r'); 
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


//volba počítače
function getComputerChoice() {
  const choices = ['r', 'p', 's']; //array se všemi možnými výsledky
  const randomNumber = Math.floor(Math.random() *3); //náhodné číslo od 0 do 3, nikdy ne však 3!!! Floor = zaokrouhlení DOLU
  return choices[randomNumber]; //dostanu random element z choices 
}

//přejmenování "r", "s", "p" na "rock", "scissors" a "paper"
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors"; //když nebude ani "r" ani "p", vrať "Scissors"
}

function win(userChoice, computerChoice) {
  userScore++; //při výhře mi přidá 1 bod
  userScore_span.innerHTML = userScore; //přidávání bodů do tabulky "userScore_span" v HTML
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice) } (user) beats ${convertToWord(computerChoice)} (computer). You win! 🔥`;
}

function lose(userChoice, computerChoice) {
  computerScore++; //při výhře mi přidá 1 bod
  computerScore_span.innerHTML = computerScore; //přidávání bodů do tabulky "computerScore_span" v HTML
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(userChoice)} (user) loses to ${convertToWord(computerChoice)} (computer). You lost! 💣`;
}

function draw(userChoice, computerChoice) {
  result_p.innerHTML = `${convertToWord(userChoice)} (user) equals ${convertToWord(computerChoice)} (computer). It's a draw! 🤝`;
}



function game(userChoice) {
  const computerChoice = getComputerChoice();
  //switch statement namísto IF ELSE -> snazší v tomto případě
  switch(userChoice + computerChoice) {
    case 'rs': //vyhraje user
    case 'pr': //vyhraje user
    case 'sp': //vyhraje user
      win(userChoice, computerChoice);
      break; //musím dát BREAK, jinak bude pokračovat dále
    case 'rp': //vyhraje computer
    case 'ps': //vyhraje computer
    case 'sr': //vyhraje computer
      lose(userChoice, computerChoice);
      break;
    case 'rr': //remíza
    case 'pp': //remíza
    case 'ss': //remíza
      draw(userChoice, computerChoice);
      break;
  }
}

//přidal jsem funkci ke každému buttonu 
function main() {
  rock_div.addEventListener('click', function() {
  game('r');
  })

  paper_div.addEventListener('click', function() {
  game('p');
  })

  scissors_div.addEventListener('click', function() {
  game('s');
  })
}

main();