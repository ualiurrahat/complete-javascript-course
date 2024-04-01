// type conversion
const year = "1998";
// converting string year into a number
console.log(Number(year), year);

console.log(Number("rahat"));
// JS returns NaN when it can't convert a value into a number.
console.log(typeof NaN); // typeof Nan is strangle a number.

// convert number into a string
console.log(25, String(25));

// type coercion: happens when an operator
// deals with two values of different data types.

console.log("I am " + 26 + " years old");
// + converts the number to string
console.log("25" + "5" - 10); // 20
// -,*,/ convert string to numbers
console.log("5" * 5); // 25
console.log("50" / 10); //5;

let n = "2" + 5;
n = n - "5";
console.log(n);
