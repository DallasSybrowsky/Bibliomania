console.log("*****");


const bookCover = async (books) => {


  var url = `https://openlibrary.org/search.json?q=${books}`;

  const response = await fetch(url);

  const data = await response.json();

  let targetBook = data.docs[Math.floor(Math.random() * data.docs.length)];

  while (!targetBook.isbn) {
    targetBook = data.docs[Math.floor(Math.random() * data.docs.length)];
  }

  const isbn = targetBook.isbn[0];

  console.log(isbn);
};

bookCover("giver");