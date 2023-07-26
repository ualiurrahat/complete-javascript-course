//JS is a dynamically typed language.
// means its var type can be changed during run time
// statically typed language are not allowed to do this.

var a = "rahat";
// var can be declared any no. of time
var a = "minul";
console.log(a);

let b = 25;
// let b = "rahat"; shows error as let is declared only one time in a particular scope.
console.log(b);

{
    // this let is different as it is inside another scope
    let b = 2;
    console.log(b);
}
console.log(b);
// this will print b as it points out to the globally declared b.
// changing value of the let b from 25 to "eee"
b = "eee";
console.log(b);
// use var as less as possible, don't use at all is a good practice

// const is declared and assigned at the same time.
// value of const can't be reassigned and const can not be redeclared
const n = 2022;
console.log(n);
//const n = "rahat"; // shows error as n alreday declared.
//n = "twin tower" // also throws erros as const valude can't be reassigned