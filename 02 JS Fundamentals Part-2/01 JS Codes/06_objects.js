const rahatArray = ["ualiur", "rahat", "student", 25, 3.25];

const rahatObj = {
  firstName: "ualiur",
  lastName: "rahat",
  profession: "student",
  age: 25,
  cgpa: 3.25,
  friends: ["ayon", "nasim", "ripon", "minul"],
};
// how to access object's properties.
console.log(rahatObj);
// using dot notations
console.log(rahatObj.firstName);
// using square bracket
console.log(rahatObj["lastName"]);
// using custom variable with square brackets
const nameKey = "Name";
console.log(rahatObj["first" + nameKey]);
console.log(rahatObj["last" + nameKey]);

// using custom bracket with dot notation is not allowed
// console.log(rahatObj."last"+namekey); // not allowed

// add new properties to existing objects
rahatObj.passion = "coding";
rahatObj.hobbies = "movies";
console.log(rahatObj);

console.log(
  `Rahat has ${rahatObj.friends.length} friends and his best friend is ${rahatObj.friends[0]}`
);
