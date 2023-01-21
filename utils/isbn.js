// global variables
let isbn = [];
let myNum = 0;
let checkDigit = 0;
let total = 0;
isbn.push(9, 7);

// load the array
thirdNum = Math.floor(Math.random() + 8);
isbn.push(thirdNum);
for (let i = 0; i < 9; i++) {
  myNum = Math.floor(Math.random() * 10);
  isbn.push(myNum);
  if (myNum % 2 == 0) {
    // odd numbers
    total += myNum;
  } else {
    // even numbers
    total += myNum * 3;
  }
}

// create the checksum digit
checkDigit = 10 - (total % 10);
if (checkDigit == 10) {
  checkDigit = 0;
}
isbn.push(checkDigit);
isbn = isbn.join("");
console.log(isbn);
// console.log(isbn, total, total % 10);
