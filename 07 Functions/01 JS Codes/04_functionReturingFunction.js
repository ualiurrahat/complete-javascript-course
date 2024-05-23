'use strict';
// Function Returning Another Function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

// now greetHey is a variable here
// but we can use it as a function
const greetHey = greet(`Hello`);

greetHey('Rahat');
greetHey('Moho');
// I can also direcly call the greet funciton
// and it works because of funcitonal programming
greet(`What's up`)('Regina');

//challenge: try to write the greet function as an arrow funciton
const greetArr = greeting => name => console.log(`${greeting}, ${name}`);
greetArr('howdy')('minul');
