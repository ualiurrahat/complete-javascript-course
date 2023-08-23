console.log(console);
// logging the console object.

// console.assert():used to assert a statement. returns undefined if assertion is true.
// sends an error if assertion is failed i.e. the condition is false.

console.assert(5 < 10); // undefined
console.assert(5 > 50); // assertion error.

// console.clear(): clear the whole console.
// console.clear();

// console.table(): shows the object key-value pair in a table
let rahat = {
    name: "rahat",
    hobby: "coding",
    age: 22,
    income: "zero",
    love: "camel",
}
// showeing key-value pair of object "rahat" in a table form
console.table(rahat);

// console.warn(): show warning using a yello color as background.
console.warn("Don't drink and dive.");
// console.error():show as error message
console.error("Error found");

// console.info(): work as same as console.log()
// but infos are shown in difference message tabs.
console.info("information");

// console.time() and console.timeEnd()
// gives us the time taken to execute the code written between
// console.time() and console.timeEnd()
// NOTE: the label should be same inside the parenthesis of
// console.time() and console.timeEnd()
// example:
// console.time(a)
// .........code.........
// console.timeEnd(a)


// let's take how much time is taken by for loop and while loop
console.time("For Loop: ");
let a = 10;
for (let i = 0; i < 500; i++) {
    a++;
}
console.timeEnd("For Loop: ");

let i = 0;
console.time("While loop: ");
while (i < 500) {
    i++;
}
console.timeEnd("While loop: ");