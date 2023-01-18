// const ISBN = require( 'isbn-validate' );
const digitArray = [9.78*10**12,9.79*10**12];
const firstThreeDig = digitArray[Math.floor(Math.random() * digitArray.length)];
const randomIsbn = firstThreeDig+(Math.floor(Math.random()*10**10));
var check, i;

console.log(randomIsbn);