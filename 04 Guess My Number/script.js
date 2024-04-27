'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('.score').textContent);
document.querySelector('.score').textContent = 10;
document.querySelector('.number').textContent = 50;
document.querySelector('.guess').value = 15;
*/

// creating a computer generated secret number
const secretNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector('.number').textContent = secretNumber;

// to manage user's score
let score = 20;
// handling click events on the 'check' button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // displaying results
  // case 1: when no number is inserted
  // in the input field but check is  clicked.
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
  // case 2: when user guessed the correct noumber
  else if (guess === secretNumber) {
    // display correct number message
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  }
  // case 3: when user guessed number is higher
  else if (guess > secretNumber) {
    if (score > 1) {
      // displayinsg message: number is higher
      document.querySelector('.message').textContent = '📈 Too High!';
      // update and show score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';

      document.querySelector('.score').textContent = 0;
    }
  }
  // case 4: when user guessed number is lower
  else {
    if (score > 1) {
      // displayinsg message: number is higher
      document.querySelector('.message').textContent = '📈 Too Low!';
      // update and show score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';

      document.querySelector('.score').textContent = 0;
    }
  }
});
