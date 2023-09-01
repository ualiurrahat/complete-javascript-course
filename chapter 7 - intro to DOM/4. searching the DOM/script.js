// change first card title color to red

// select elements by its id: doucment.getElementById()
// used to select an element with a given "id" attribute
let cardTitle = document.getElementById("first-card-title");
cardTitle.style.color = "red";


// select all elements using particular css selectors.document.querySelectorAll():
//  returns all elements inside an element matching the given CSS selector
let allCards = document.querySelectorAll(".card-title");
console.log(allCards);
// changing color of 2nd and 3rd cards
allCards[1].style.color = "grey";
allCards[2].style.color = "cyan";

// select only one element using css selector: document.querySelector();
// returns the first element of the given CSS selector
// a better version: document.querySelectorAll(css)[0];
document.querySelector(".this").style.color = "cyan";
document.querySelector(".this").style.background = "black";

// get elements by tag : document.getElementByTagName()
// returns element with the given tag name
console.log(document.getElementsByTagName("a")); // print all the anchor tag link

// we can use querySelettor to work on elements within elements
console.log(document.querySelector(".card").getElementsByTagName("a"));
// prints total no. of link tag in card one.