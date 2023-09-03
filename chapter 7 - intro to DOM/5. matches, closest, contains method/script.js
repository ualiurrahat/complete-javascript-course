// elem.matches(css) : check if the given css property exists or not
// returns true if it exists, otherwise false
let id1 = document.getElementById("id1");
console.log(id1);
console.log(id1.matches(".box")); // true as it has a class named box
console.log(id1.matches(".cool")); // false. it has no class named cool

// elem.closest(css): to look for the nearest ancestor that matches
// the given css. the element itself is also checked.

let sp1 = document.getElementById("sp1");
console.log(sp1.closest(".box")); // returning its ancestor paragraph element
console.log(sp1.closest("#sp1")); // returning itself

// elemA.contains(elemB): returns true if elemB is inside of elemA(elemB is a descendent of elemA)
// or elemA equals to elemB.
console.log(id1.contains(sp1)); // true since sp1 is inside of id1
console.log(id1.contains(id1)); // true
console.log(sp1.contains(id1)); // this is false