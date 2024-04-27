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

// handling clicke events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // handling case when no number is inserted
  // in the input field
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
});
