// The alert() method displays an alert box with a message and an OK button.

// The alert() method is used when you want information to come through to the user.

alert("Alert Alert!!! this is an alert box");

/*
The prompt() method displays a dialog box that prompts the user for input.

The prompt() method returns the input value if the user clicks "OK", otherwise it returns null.
*/
let age = prompt("Enter your age: ", "25");
// we can also give default value with prompt,as the second parameter.
// here, "25" is the default value.

age = Number.parseInt(age);
/*
The write() method writes directly to an open (HTML) document stream.
The write() method deletes all existing HTML when used on a loaded document.
The write() method cannot be used in XHTML or XML.
*/
document.write(age);

/*
The confirm() method displays a dialog box with a message, an OK button, and a Cancel button.
The confirm() method returns true if the user clicked "OK", otherwise false.
*/

let write = confirm("Do you want to write: ");
if (write) {
    document.write(write);
}
else {
    document.write("Please allow me to write");
}

/*
limitation of alert,confirm,prompt:
1) their exact look and location differ based on the browser is used.
2) they look very old fashioned.We can create attractive box by our coding skill.

use: we can use them in admin panel.
*/


