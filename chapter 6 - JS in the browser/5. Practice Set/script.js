// question 1,2,3
var age = prompt("Enter your age: ");
age = Number.parseInt(age);


if (age >= 18) {
    alert("You can drive");
}
else if (age < 0) {
    console.error("You entered -ve age");
}
else {
    alert("Driving not allowed");
}
let retask = confirm("Do you wish to see the prompt again");
while (retask) {
    age = prompt("Enter your age: ");
    age = Number.parseInt(age);


    if (age >= 18) {
        alert("You can drive");
    }
    else if (age < 0) {
        console.error("You entered -ve age");
    }
    else {
        alert("Driving not allowed");
    }
    retask = confirm("Do you wish to see the prompt again");
}

// q4

var n = prompt("enter number: ");
if (n % 4 == 0) {
    location.href = "https://www.google.com";
}
// q5
var colorName = prompt("Enter color Red,Blue or Yellow:");
document.body.style.backgroundColor = colorName;
