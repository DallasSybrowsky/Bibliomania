// Purpose: To create the routes for the book API
var getISBN = function (ISBN) {
    var url = `https://covers.openlibrary.org/a/olid/${ISBN}-L.jpg`;
    fetch(url, requestOptions).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          var chosenISBN =
            data.results[Math.floor(Math.random() * data.results.length)];
          chosenISBNId = chosenISBN.id;
          console.log(chosenISBNId);
        });
      }
    });
  };
  