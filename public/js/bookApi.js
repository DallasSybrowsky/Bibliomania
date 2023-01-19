

const ISBN = require( 'isbn-validate' );
const digitArray = [9.78*10**12,9.79*10**12];
const firstThreeDig = digitArray[Math.floor(Math.random() * digitArray.length)];
const randomIsbn = firstThreeDig+(Math.floor(Math.random()*10**10));



console.log(randomIsbn);
const isbnValidate = ISBN.Validate(randomIsbn);
if (!isbnValidate) {
    console.log(true);
} else {
    console.log(false);
}

var bookCover = function (books) {
    var url = `https://www.googleapis.com/books/v1/volumes?q=${books}`;
    fetch(url, requestOptions).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          var chosenBook =
            data.results[Math.floor(Math.random() * data.results.length)];
            console.log(chosenBook);
        });
        
      }
    });
  };
  
  // used in getSpoonacularID to acquire specific recipe information
//   var chosenRecipeInstructions = function (chosenRecipeID) {
//     var url = `https://api.spoonacular.com/recipes/${chosenRecipeID}/information?apiKey=b286b8d959d04a8b8162b7f531ff9213`;
//     fetch(url, requestOptions).then(function (response) {
//       if (response.ok) {
//         response.json().then(function (data) {
//           chosenRecipeTitle = data.title;
//           dinnerNameEl.innerHTML = chosenRecipeTitle;
//           var recipeInstructions = data.instructions;
//           dinnerInstructionsEl.innerHTML = recipeInstructions;
//           var ingredients = data.extendedIngredients;
//           dinnerIngredientsHeaderEl.innerHTML = "INGREDIENTS";
//           dinnerInstructionsHeaderEl.innerHTML = "INSTRUCTIONS";
//           for (var i = 0; i < ingredients.length; i++) {
//             var recipeIngredients = ingredients[i].original;
//             dinnerIngredientEl.innerHTML += `<li>${recipeIngredients}</li>`;
//           }
//         });
//       }
//     });
//   };