
// prompt: always converts the input into a string
// let age = prompt("what is your age?");
// console.log(typeof age);
// here, prompt converts type of age from number to string
let age = 25;
// Number.parseInt: convert string into int
age = Number.parseInt(age); // same works for a = parseInt(a);
console.log(typeof age);

let name = "unknown";

if (age % 6 == 0) {
    console.log("divisible by 3 and 2");
}
else if (age % 3 == 0) {
    console.log("divisible by 3 only");
}
else if (age % 2 == 0) {
    console.log("divisible by 2 only");
}
// ternary operator(?): evaluates a condition and execudes the code based on the condition
console.log(age > 18 ? "can drive" : "can not drive");

// use of switch
// var number = prompt("enter your marks: ");
let number = 75;

number = parseInt(number);

switch (number) {
    case 40:
        console.log("passed somehow");
        break;
    case 80:
        console.log("great");
        break;
    case 100:
        console.log("amazing");
        break;

    default:
        console.log("your mark is ", number);
        break;
}