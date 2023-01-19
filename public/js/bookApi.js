const keyWords = [
  "the",
  "self-help",
  "self-improvement",
  "religious",
  "non-fiction",
  "cyber-punk",
  "science-fiction",
  "romance",
  "game-of-thrones",
  "sea",
  "popular",
  "How To Win Friends and Influence People",
  "Robert Greene",
  "Philosophy",
  "The Secret",
  "Harry Potter"
];

const defaultLinks = [
  "https://covers.openlibrary.org/b/isbn/9781511327794-L.jpg",
  "https://covers.openlibrary.org/b/isbn/0008354553-L.jpg",
  "https://covers.openlibrary.org/b/isbn/9780192816245-L.jpg",
  "https://covers.openlibrary.org/b/isbn/0534526411-L.jpg",
  "https://covers.openlibrary.org/b/isbn/055347359X-L.jpg",
  "https://covers.openlibrary.org/b/isbn/9781782124207-L.jpg",
  "https://covers.openlibrary.org/b/isbn/9781408855669-L.jpg"
]

const bookImageEl = document.querySelector("#book-image")

const chosenKeyWord = keyWords[Math.floor(Math.random() * keyWords.length)];
const chosenLink = defaultLinks[Math.floor(Math.random() * defaultLinks.length)];
// console.log(chosenLink);
// fetch random isbn from array
const bookFetch = async (word) => {
  const url = `https://openlibrary.org/search.json?q=${word}`;

  const response = await fetch(url);

  const data = await response.json();

  let targetBook = data.docs[Math.floor(Math.random() * data.docs.length)];

  while (!targetBook.isbn) {
    targetBook = data.docs[Math.floor(Math.random() * data.docs.length)];
  }

  const isbn = targetBook.isbn[0];

  console.log(targetBook);
  
  bookCover(isbn);
};

bookFetch(chosenKeyWord);

const bookCover = (isbn) => {
  let coverURL = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;

  console.log(coverURL);
  bookImageEl.innerHTML = `<img src='${coverURL}'/>`;
  fetch(coverURL).then((res) => res.text() ).then((data) => {
    if (data === "not found" || data === "internal server error") {
      coverURL = chosenLink;
      console.log(coverURL);
      bookImageEl.innerHTML = `<img src='${chosenLink}'/>`;
    } 
  });

}
// insert isbn into link
