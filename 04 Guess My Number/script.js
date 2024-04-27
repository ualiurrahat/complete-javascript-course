'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('.score').textContent);
document.querySelector('.score').textContent = 10;
document.querySelector('.number').textContent = 50;
document.querySelector('.guess').value = 15;
