let arr = [10, 20, 30, 40, 50];
// regular for loop
console.log("displaying array elements with  regular for loop:");
for (let i = 0; i < arr.length; i++) {
    console.log(i + " :" + arr[i]);
}
/*
forEach():calls a function for each element in an array.IT is not executed for empty elements.
*/
console.log("printing square value of each element using for loop:");
arr.forEach((element) => {
    console.log(element * element);
})
// here, element is not keyword. any word for example i will work same way.
/* like arr.forEach((i) =>{
console.log(i*i);
});
*/
// Array.from() - used to create array from object
/*
from(): returns an array from any object with a length property.
returns an array from any iterable object.
*/

let name = "rahat";
let chars = Array.from(name);
console.log("getting character as array of characters using from():");
console.log(chars);

// for....of : loop through values of object
console.log("printing array elements using for of loop:");
for (let item of arr) {
    console.log(item);
}

// for... in : loop throughs keys of an object
console.log("printing index and values using for in loop:");
for (let i in arr) {
    console.log("Key: " + i + " object: " + arr[i]);
}
