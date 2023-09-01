// accessing first,last and child nodes of the document.
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);
// childNodes are collection, not array
// we can use Array.from() to convert them into array.
// convert nodeList into arr
for (let i = 0; i <= 5; i++) {
    console.log(document.body.childNodes[i]);
}
let arr = Array.from(document.body.childNodes);
console.log(arr);

// following are always true
// elem.childNodes[0] === elem.firstChild
// elem.childNodes[elem.childNodes.length - 1] === elem.lastChild

// elem.hasChildNodes() : to check whether there are any child nodes
console.log(document.body.hasChildNodes()); // true