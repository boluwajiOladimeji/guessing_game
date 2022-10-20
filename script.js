'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = ' 🎉 Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

let random = Math.ceil(Math.random() * 20);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // console.log(guess, random, typeof guess);

  if (!guess) {
    // When Guess is empty
    // document.querySelector('.message').textContent = '🛑 No number ';
    displayMessage('🛑 No number');
  }

  // When guess is wrong
  else if (guess !== random) {
    if (score > 1) {
      displayMessage(guess > random ? 'Ooops Too high' : 'Ooops Too low');
      // document.querySelector('.message').textContent =
      // guess > random ? 'Ooops Too high' : 'Ooops Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   'Game Over : Click Again';
      displayMessage('Game Over : Click Again');
      document.querySelector('.score').textContent = 0;
    }
  }
  // when player picks over 20 or above the length
  else if (guess === random) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = random;
    document.querySelector('body').style.backgroundColor = '#60B347';
    document.querySelector('.number').style.width = '24rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing ...';
  displayMessage('Start guessing ...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '14rem';

  document.querySelector('.guess').value = '';

  random = Math.ceil(Math.random() * 20);
  console.log(random);
});
