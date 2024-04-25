// regular for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let result = {
  minul: 3.25,
  naeem: 3.63,
  rahat: 3.08,
  tufayel: 3.33,
};
// for-in loop : loops through keys of an object
// for(key in object)
// { code to be executed}
/*
tips: Do not use for in over an Array if the index order is important.
The index order is implementation-dependent, and array values may not be accessed in the order you expect.
 
It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
 */
for (let a in result) {
  console.log("CGPA of " + a + " is " + result[a]);
}

// for of loop : loops through values of an object
// executes a loop that operates on a sequence of values sourced from an iterable object
// for(variable of iterable)
// {code to be executed}
for (let ch of "rahat") {
  console.log(ch);
}

// main difference between for of and for in
let str = "rahat";

for (let a in str) {
  console.log(a, str[a]);
}

for (let b of str) {
  console.log(b);
}
