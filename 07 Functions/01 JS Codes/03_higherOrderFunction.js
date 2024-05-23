'use strict';
// funcitons accepting callback functions

// here is a function to convert a sting into one word
const oneWord = function (str) {
  // using expression to avoid spacing between words
  // and adding all words into a single word with lowercase letters.
  return str.replace(/ /g, '').toLowerCase();
};

// here a function that upperacases all
// the letters in the first word
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order functions: a function
// that takes another function as argument
// or return another function or do both

const transformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`transformed string: ${fn(str)}`);

  // every function has a property called 'name'.
  // printing the name property of the used fn function.
  console.log(`transformed by: ${fn.name}`);
};

// using upperFirstWord function in the parameter
// of the higher order funciton
// NOTE: we don't call the upperFirstWord function
// we just name the function in the parameter
transformer(`Javascript is the best language!`, upperFirstWord);
console.log(`\n`);
transformer(`Javascript is the best language!`, oneWord);

// JS uses callbacks all the time
// why?
//1)cause it makes it easy to split our code
// into more readable and interconnected part
// 2) callbacks maintain and provide abstractions.
const high5 = function () {
  console.log('👋');
};

['Jonas', 'Martha', 'Adam'].forEach(high5);
