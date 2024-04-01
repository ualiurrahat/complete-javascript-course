/*The switch keyword initiates the switch statement.
The expression inside the parentheses after switch is evaluated once.
Each case in the switch statement specifies a possible value for the expression.
The break keyword exits the switch block after a case is executed. 
If break is omitted, the next case will be executed even if it doesn't match.
The default case is executed when none of the other cases match.
*/

// Define a variable
let day = 3;

// Switch statement to determine the day of the week
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}
