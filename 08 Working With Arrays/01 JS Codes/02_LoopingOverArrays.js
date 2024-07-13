let arr = [10, 20, 30, 40, 50];
// REGULAR FOR LOOP
console.log("displaying array elements with  regular for loop:");
for (let i = 0; i < arr.length; i++) {
  console.log(i + " :" + arr[i]);
}
// FOREACH
/*
forEach():calls a function for each element in an array.IT is not executed for empty elements.
*/
console.log("printing square value of each element using forEach:");
arr.forEach((element) => {
  console.log(element * element);
});
// here, element is not keyword. any word e.g. i will work same way.
/* like arr.forEach((i) =>{
console.log(i*i);
});
*/
// FROM
// Array.from() - used to create array from object
/*
from(): returns an array from any object with a length property.
returns an array from any iterable object.
*/

let myName = "rahat";
let chars = Array.from(myName);
console.log("getting character as array of characters using from():");
console.log(chars);
//..........................
// FOR OF
// for....of : loop through values of object
console.log("printing array elements using for of loop:");
for (let item of arr) {
  console.log(item);
}
//.................
// FOR IN
// for... in : loop throughs keys of an object
console.log("printing index and values using for in loop:");
for (let i in arr) {
  console.log("Key: " + i + " object: " + arr[i]);
}

/*
Deep Dive into forEach():
forEach loops over each element of the array
it executes the callback function for each element
it passes current element,current index,entire array 
for each iteration over the array
Arr.forEach(function(elem,currIndex,Arr){
   
    // callback function gets executed
});
 // NOTE: in the callback function paratmer, 0th == element, 1st == index of that element, 2nd = entire array
// this position in the parameter is fixed.
*/
// practical example of using for of and forEach()
const movements = [200, 450, -400, 3000, -650, -130, 70, 1000];
console.log("-------------For of-------------- ");
// for of
// in Arr.entries() : first element == index, second element ==  current element from array
for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
}
// using forEach()
console.log("----------FOREACH----------");
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// Key Difference between forEach() and other for loop
/*
forEach() will always iterates over all the elements within an array.
Break and Continue state don't work upon forEach().
But they do over any other for loop.
So, whenever we need to iterate over all array elements, use forEach()
If we need selective iteration, use any other foor loop.
*/
