'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const setMessage = function (message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function() {
  const guessedNumber = Number(document.querySelector('.guess').value);

  if (!guessedNumber){
    document.querySelector('.message').textContent = 'No number is guessed';
  }else{
    if (guessedNumber !== secretNumber) {
      score --;
      setMessage(guessedNumber > secretNumber ? 'Number is too high' : 'Number is too low');
    }else{
      setMessage('Number is correct');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#228B22';

      if (highScore < score){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
  }

  if (score > 0) {
    document.querySelector('.score').textContent = score;
  }else{
    document.querySelector('.score').textContent = 0;
    setMessage('You lost the game');
  }
})

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  setMessage('Start guessing ...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = '20';
})