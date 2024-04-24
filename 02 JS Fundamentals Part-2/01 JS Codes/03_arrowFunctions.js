// One-liner arrow function with multiple parameters
const multiply = (a, b) => a * b;

// Multiliner arrow function with multiple parameters
const greet = (name, timeOfDay) => {
  if (timeOfDay === "morning") {
    return `Good morning, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
};

// Arrow function with multiple parameters
const add = (num1, num2) => {
  return num1 + num2;
};

// Arrow function with a single parameter
const double = (num) => num * 2;

// Example usage
console.log(multiply(2, 3));
console.log(greet("Sarah", "morning"));
console.log(add(5, 7));
console.log(double(4));

// NOTE: array functions don't get the this keyword.
