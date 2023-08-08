// strings
let name = "rahat";
let me = 'rahat';
// we can use both single quotation or double quotation mark to write string.
// but can not mix up " with ' :for ex.....:  let name = "rahat'
console.log(name);
console.log(me);
console.log(me.length);

let boy1 = "minul";
let boy2 = "naeem";
// template literals: uses backtic instead of quotes to define a string
// string interpolation: we can use variable directly inside template literals.
let sentence = `${boy1} is a friend of ${boy2}`;
console.log(sentence);

// escape sequence characters
let a = "madam\'s lecture";
console.log(a);