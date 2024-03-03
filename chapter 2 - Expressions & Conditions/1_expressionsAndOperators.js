// expressions: fragments of code that produces a value
// every value written literally is an expression
//"rahat";
//25;
// these are expressions

// arithmetic operators
// + - / * % ** (var++) (++var) (--var) (var--)
let a = 25;
let b = 8;
console.log("a + b = ", a + b); //addition
console.log("a - b = ", a - b); // subtraction
console.log("a * b = ", a * b); // multiplication
console.log("a / b = ", a / b); // division
console.log("a % b = ", a % b); // modulus
console.log("a ** b = ", a ** b); // exponentiation: a ^ b = 2^4 = 16
console.log("a++ = ", a++); // increment
console.log("++a = ", ++a);
console.log("--a = ", --a); // decrement
console.log("a-- = ", a--);

// assignment operators
// = += -= *= /= %=
let c = 10;
c += 5;
console.log(c);
c -= 20;
console.log(c);
c *= 2;
console.log(c);
c /= -2;
console.log(c);
c **= 2;
console.log(c);
c %= 5;
console.log(c);

// comparison operator
// ==, !=, ===, !==, >=, <=, >,<, !
let d = 25;
let e = 8;
// == .... equal to value
// != .... not equal to value
console.log("d == e is ", d == e);
console.log("d != e is ", d != e);
// === equal to value and type
// !== not equal value or not equal type
console.log("d === e is ", d === e);
console.log("d !== e is ", d !== e);

// now check this one
let f = 10;
let g = "10";
console.log("f == g is ", f == g); // js does type coercion automatically when comparing variables.
// here, g="10"is converted to g = 10.
// it is true cause the number 10 and string value is 10
console.log("f != g is ", f != g);
// false
console.log("f === g is ", f === g);

console.log("f !== g is ", f !== g);

// typeof operator
console.log(typeof a);
console.log(typeof null);
