// 7 primitive data types in JS: nn ss bb u
// null, number, string, symbol, boolean, bigInt, undefined
let a = null;
let b = 25;
let c = Symbol("#billionDollar");
let d = "murr";
let e = true;
let f = BigInt("25") + BigInt("08");
let g; // g remaings undefined even if we don't specifically write it.
console.log(a, b, c, d, e, f, g);
console.log(typeof f);

// non primitive data type:
// object, array, function
const murr = {
    name: "rahat",
    age: 24,
    college: "bsmrstu",
    status: "learner"
    // properties like name can be written also "name" and still works fine
};
console.log(murr);
console.log(murr.age);