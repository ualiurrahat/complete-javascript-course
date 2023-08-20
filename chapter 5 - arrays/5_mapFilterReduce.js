// exploring map,reduce,filter functions on array.
let num = [10, 20, 30, 40, 50];
console.log("our num array:");
console.log(num);

// map(): creates a new array by performing some operation on each array elements. does not change the original array.
// does not perform on an empy array.
// Array.map(value,index,array)
// Array.forEach(value,index,array)
// diff betn map() and forEach() : forEach doesn't create new array but map does.

let arr = num.map((elements) => {
    return elements + 100;
})
console.log("new array arr peforming map on num array:");
console.log(arr);

// Array.filter() : filters an array with values that passes a test and creates a new array.
let arr2 = num.filter((value) => {
    return value > 25;
})
console.log("new array arr2 from num array after performing filter method:");
console.log(arr2);
// filter(), map(), forEach()-->they do not change the original array

/*
The reduce(): executes a reducer function for array element.
 returns a single value: the function's accumulated result.
does not execute the function for empty array elements.
 does not change the original array.
*/
let value = num.reduce((num1, num2) => {
    return num1 + num2;
})
console.log("sum of all values in num array by performing reduce funcion:");
console.log(value); // value = sum of all elements in array num


