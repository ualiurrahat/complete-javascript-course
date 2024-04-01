/*
Expression: produce a value
Statement: like full sentences that translates our actions.
actions that we want to perform in our program.

*/
// Statement: Conditional statement
let time = 14;
let greeting;

if (time < 12) {
  greeting = "Good morning!";
} else {
  greeting = "Good afternoon!";
}
// Expression: Arithmetic expression
let sum = 5 * (10 - 3) + 2;

// NOTE: template literals take only expressions not statement
// cause expressions always produce value
let me = "rahat";
let age = 2024 - 1998;
let myself = `hi, I am ${me}. I am ${age} years old`;

console.log(myself);

// but this will produce an error
// console.log(`i am ${230 - 204} years old` ${if(23< 15)});
