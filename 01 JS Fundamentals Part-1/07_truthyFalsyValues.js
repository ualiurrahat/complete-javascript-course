// Falsy values: values that are not false but produces false
// when converted into boolean value
// 5 falsy values are there: 0,' ',null,undefined,Nan
// so in total, we have 6 falsy values. boolean 'false' is the 6th one

console.log(Boolean(0));
console.log(Boolean());
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean("rahat"));
console.log(Boolean(25));

// truthy values: values that do not produce "true"
// when converted into boolean value.
