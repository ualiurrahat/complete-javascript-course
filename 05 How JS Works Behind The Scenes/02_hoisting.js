'use strict';
console.log(me); // undefined. as var is hoisted as undefiend value.
// console.log(job); // error. accessing before initialization
// console.log(age); // error. accessing vefore initialization

var me = 'rahat';
const job = 'student';
let age = 25;

console.log(addDecl(2, 3));
// no error, as function declarations are hoisted with initial value.

// console.log(addExpr(5, 10));  // error. accessing before initialization

console.log(addArrow); // undefined, as it is declared as var
// console.log(addArrow(10, 5));
// typeError: addArrow is not a function
// because addArrow was declared as var
// now addArrow(10,5) == undefined(10,5);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// example

if (!numProducts) deleteProducts();
var numProducts = 10;

function deleteProducts() {
  console.log('All products deleted');
}

// var variables becomes a property of the window object
// where as let,const are not.
var x = 25;
let y = 2;
const z = 10;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
