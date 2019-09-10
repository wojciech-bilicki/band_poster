let randomNumber = Math.floor(Math.random() * 9) + 1;
console.log(randomNumber);
// wspomnieć o DOMIE
const guessedNumberInput = document.querySelector('#guessedNumber');
const playButton = document.querySelector("#play");
const guessParagraph = document.querySelector('.guessCount');
const lastGuessParagraph = document.querySelector('.lastGuess');
const lowOrHiParagraph = document.querySelector('.lowerOrHigher');
let guessCount = 1;
let resetButton;
let userGuess;

console.log(guessedNumberInput);
const button = document


// function checkGuess() {
//   alert('Your guess')
// }


playButton.addEventListener('click', event => {
  event.preventDefault();
  checkGuess();
})



const handleWin = () => {
  lastGuessParagraph.textContent = 'Congratulations! You win a ticket!';
  lastGuessParagraph.style.backgroundColor = 'green';
  lowOrHiParagraph.textContent = '';
  setGameOver();
}

const handleLose = () => {
  lastGuessParagraph = '!!!GAME OVER!!!';
  setGameOver();
}

const handleNextGuess = () => {
  lastGuessParagraph.textContent = 'Wrong!';
  lastGuessParagraph.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHiParagraph.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHiParagraph.textContent = 'Last guess was too high!';
    }
}

function setGameOver() {
  guessedNumberInput.disabled = true;
  playButton.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

const resetGame = () => {
  guessCount = 1;
  const resetParagraphs = document.querySelectorAll('resultParas p');
  for(let i = 0; i < resetParagraphs; i++) {
    resetParagraphs[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessedNumberInput.disabled = false;
  playButton.disabled = false;
  guessedNumberInput.value = '';
  guessedNumberInput.focus();

  guessParagraph.textContent = '';
  lastGuessParagraph.textContent = '';
  lastGuessParagraph.style.backgroundColor = '#fff';
  randomNumber = Math.random()*9;
}

const incrementTurn = () => {
  guessCount++;
  guessedNumberInput.value = '';
  guessedNumberInput.focus();
}

// odpal funkcję w konsoli
// 1.
const checkGuess = () => {
  userGuess = Number(guessedNumberInput.value);
  if(guessCount === 1) {
    guessParagraph.textContent = 'Previous guesses: ';
  }
  guessParagraph.textContent += userGuess + ' ';

  if(userGuess === randomNumber) {
    // we win
    handleWin();
  } else if( guessCount === 10) {
    handleLose();
  } else {
    handleNextGuess();
  }

  incrementTurn();
}