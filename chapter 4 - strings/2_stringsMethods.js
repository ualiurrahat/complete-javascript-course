let name = "Rahat";
console.log(name);
// length
console.log(name.length);
// convert string to uppercase and lowercase letter
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// slice strings: slice (a,z)....from index a to excluding z
console.log(name.slice(1, 4));
// slice(z) ... from z to last index
console.log(name.slice(3));

// replace("existing", "newOne");
let newName = "Rahat Khan";
newName = newName.replace("Khan", "foinni");
console.log(newName);

// concatenate string
let boy = "minul";
boy = boy.concat(" ", "hasan");
console.log(boy);

// trim() : remove spaces
let a = "     hero alam    ";
console.log(a);
console.log(a.trim());

// print string characters using for loop
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

// strings are immutable
// means if name = "rahat"
// name[2] = "s" is not allowed