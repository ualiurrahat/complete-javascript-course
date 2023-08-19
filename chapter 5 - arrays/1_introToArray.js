// arrays in JS can store multiple var of multiple types
let arr = ["rahat", 24, "EEE", false, null];
console.log(arr);
console.log(arr[0]);
console.log(arr[20]); // shows undefined as the element does not exist
// array is treated as objects but elements are of their own type
console.log(typeof arr);
console.log(typeof arr[0]);

console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}