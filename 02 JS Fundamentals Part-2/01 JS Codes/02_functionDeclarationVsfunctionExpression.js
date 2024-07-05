// we can invoke function declaration before it is declared.
console.log(greetDeclaration("tamanna"));

// Function Declaration
function greetDeclaration(name) {
  return "Hello, " + name + "!";
}

// this will produce error.
// function expression can not be called before it is written or initialized
// console.log(greetExpression("murr"));

// Function Expression
var greetExpression = function (name) {
  return "Hello, " + name + "!";
};

// Function Call - using the function declared
console.log(greetDeclaration("Rahat"));

// Function Call - using the function expression
console.log(greetExpression("Sarah"));

/* differences...........
Function Declaration:
Declared using function keyword.
Can be called before the declaration.
Requires a name for the function.
Function Expression:
Involves assigning a function to a variable.
Not hoisted, cannot be called before assignment.
Can be anonymous or named.
*/
