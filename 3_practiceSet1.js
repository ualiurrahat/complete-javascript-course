// 1. create a variable of type string and try to add a number to it.
// 2. use typeof operator to find out the data type of the string in question 1.
// 3. create a const object in js. can you change it to hold a number later?
// 4. try to add a new key to the const object of previous questions.
//     were you able to do it?
// 5. write a JS program to create a word-meaning dictionary of 5 words.


// solutions are below.............
// chapter 1 -Q1
let str = "rahat";
let num = 8;
str = str + num;
console.log(str);

// Q2
console.log(typeof str);
// string + number = string

// Q3
const ob = {
    age: 25,
    income: 33000
};
// ob = "rahat"; ob can not be reassigned
console.log(ob);

// Q4
// changing age property of const object ob
ob.age = 22; // this is possible
console.log(ob);

// adding new key/ propery to const object ob
ob.status = "unmarried"; // this is also possible
console.log(ob);
// so we can add new property and change value of them in a const object
// but const object can not be reassigned to any other object like number,boolean etc.

// Q5
const dict = {
    love: "strong affection for another arising out of kinship or personal ties.",
    read: "a period or act of reading something.",
    obsession: "he domination of one's thoughts or feelings by a persistent idea, image, desire, etc.",
    goddess: "a woman of extraordinary beauty and charm.",
    rich: "having a lot of money"
}
console.log(dict);