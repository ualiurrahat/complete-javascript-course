/*
Window object: everything we write in JS, 
comes under Window object. it is a global object
for ex: insetad of allert()
we can write: window.allert()
-----
windows object consists of 3 part: BOM, DOM, JS Core

DOM:Document Object Model.
 the html page is completely converted into a JS object.
It is called DOM.

BOM: Browser Object Model
represents additional objects provided 
by the browser(host environment)
ex: alert(),prompt(),confirm() are parts of BOM

*/
console.log(window);
console.log(document);
console.log(document.body);
document.body.style.backgroundColor = "yellow";
