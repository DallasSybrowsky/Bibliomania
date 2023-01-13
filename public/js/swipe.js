var getISBN = function (ISBN) {
  fetch(`https://covers.openlibrary.org/a/olid/240727-S.jpg`, {
    method: "GET",
    redirect: "follow",
  }).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        var chosenISBN =
          data.results[Math.floor(Math.random() * data.results.length)];
        console.log(requestOptions);
      });
    }
  });
};