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

// another way of declaring array: using Arrayf function
let needs = new Array("degree", "job", "money", "girlfriend");
console.log(needs);

// NOTE: in JS, primitive data types are immutable
// but array is not primitive type. so its data is mutable
// below is the example
const friends = ["naeem", "sazzad", "sharif", "nasim", "ayon"];
console.log(friends);

// now changing index 0 value of friends array
friends[0] = "shohan";
console.log(friends);
// NOTE: even though friends is a const array,
// we can change its member value since array is not primitive type
// but we can not reassign friends like this:
// friends = ["rahim", "karim"]; this is not allowed. since friend is constant.
