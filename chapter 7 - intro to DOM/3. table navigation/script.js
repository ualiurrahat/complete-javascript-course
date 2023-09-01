let t = document.body.firstElementChild.firstElementChild;
console.log(t);
console.log(t.rows); // collection of tr elements.
console.log(t.caption); // reference to a <caption>
console.log(t.tHead); // reference to <thead>
console.log(t.tFoot); // reference to <tfoot>
console.log(t.tBodies); // collection of <tbody> elements.
console.log(t.rows[0].cells);
console.log(t.rows[0].sectionRowIndex);
console.log(t.rows[1].rowIndex);

console.log("type of document is: ", typeof document);
console.log("type of window is: ", typeof window);