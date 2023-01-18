// Description: This file contains the logic for generating a random ISBN number
// Function to generate random ISBN

function isValidIsbn() {
  // Concatenate first two digits with random number that's either 8 or 9
  let isbn = "97" + Math.round(Math.random() + 8) + Math.floor(Math.random() * 1000000000);
  // split the string into an array
  for (let i = 0; i < 13; i++) {
    // Split the string into an array
    array = split([i]); // Not sure this is correct
    if (i % 2 === 0) {
      // Multiply the even numbered digits in the array (zero indexed) by 1
      (array[i] * 1);
      // Need code here to add this number to a new array
    }
    if (i % 2 !== 0) {
      // Multiply the even numbered digits in the array (zero indexed) by 3
      (array[i] * 3);
      // Need code here to add this number to a new array
    }
    // Add all the numbers in the new array together
  }
}
