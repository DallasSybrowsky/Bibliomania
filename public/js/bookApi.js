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
  "Harry Potter",
  "Dune",
  "The Lord of the Rings",
  "The Hobbit",
  "The Chronicles of Narnia",
  "The Hitchhiker's Guide to the Galaxy",
  "The Time Machine",
  "The War of the Worlds",
  "The Martian Chronicles",
  "The Handmaid's Tale",
  "The Hunger Games",
  "The Giver",
  "The Maze Runner",
  "The Kite Runner",
  "The Book Thief",
  "The Perks of Being a Wallflower",
  "The Fault in Our Stars",
  "The Great Gatsby",
  "The Catcher in the Rye",
  "The Outsiders",
  "Call of the Wild",
  "The Jungle Book",
  "The Little Prince",
  "The Giving Tree",
  "The Very Hungry Caterpillar",
  "The Cat in the Hat",
  "The Lorax",
  "The Gruffalo",
  "1984",
  "Animal Farm",
  "Brave New World",
  "Fahrenheit 451",
  "The Picture of Dorian Gray",
  "The Strange Case of Dr. Jekyll and Mr. Hyde",
  "The Time Machine",
  "Charlotte's Web",
  "Charlie and the Chocolate Factory",
  "Matilda",
  "The BFG",
  "The Witches",
  "The Phantom Tollbooth",
  "The Lion, The Witch and the Wardrobe",
  "Life of Pi",
  "The Alchemist",
  "The Da Vinci Code",
  "Angels & Demons",
  "The Inferno",
  "The Divine Comedy",
  "The Odyssey",
  "The Iliad",
  "The Aeneid",
  "Meditations",
  "The Prince",
  "The Art of War",
  "The Republic",
  "Les Miserables",
  "Memoirs of a Geisha",
  "Cyrano de Bergerac",
  "The Count of Monte Cristo",
  "The Three Musketeers",
  "The Hunchback of Notre Dame",
  "The Scarlet Letter",
  "The Adventures of Huckleberry Finn",
  "The Adventures of Tom Sawyer",
  "The Call of the Wild",
  "Ready Player One",
  "Patriot Games",
  "The Hunt for Red October",
  "The Sum of All Fears",
  "The Bourne Identity",
  "The Bourne Supremacy",
  "The Bourne Ultimatum",
  "The Bourne Legacy",
  "The Bourne Conspiracy",
  "The Bourne Imperative",
  "The Bourne Objective",
  "The Bourne Retribution",
  "The Bourne Deception",
  "The Bourne Sanction",
  "The Bourne Dominion",
  "The Bourne Ascendancy",
  "The Bourne Evolution",
  "The Bourne Betrayal",
  "The Bourne Ultimatum",
  "The Bourne Supremacy",
  "Rainbow Six",
  "Without Remorse",
  "Tom Clancy",
  "Vince Flynn",
  "Jack Reacher",
];

const defaultLinks = [
  "https://covers.openlibrary.org/b/isbn/9781511327794-L.jpg",
  "https://covers.openlibrary.org/b/isbn/0008354553-L.jpg",
  "https://covers.openlibrary.org/b/isbn/9780192816245-L.jpg",
  "https://covers.openlibrary.org/b/isbn/0534526411-L.jpg",
  "https://covers.openlibrary.org/b/isbn/055347359X-L.jpg",
  "https://covers.openlibrary.org/b/isbn/9781782124207-L.jpg",
  "https://covers.openlibrary.org/b/isbn/9781408855669-L.jpg",
  "https://covers.openlibrary.org/b/isbn/3596907160-L.jpg",
  "https://covers.openlibrary.org/b/isbn/1439501661-L.jpg",
  "https://covers.openlibrary.org/b/isbn/0140444785-L.jpg",
];

const bookImageEl = document.querySelector("#book-image");
const likeCover = document.querySelector(".like");
const dislikeCover = document.querySelector(".dislike");

const chosenKeyWord = keyWords[Math.floor(Math.random() * keyWords.length)];
const chosenLink =
  defaultLinks[Math.floor(Math.random() * defaultLinks.length)];

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
  var like = false;
  var like = false
  bookCover(isbn, like);
};

const bookFetchLike = async () => {
  const image = document.querySelector("#book-image").children;
  const url = image[0].src;
  let reg = new RegExp("https://covers.openlibrary.org/b/isbn/(.*)-L.jpg");
  const test = reg.exec(url);
  const isbn = test[1];
  var like = true;
  // bookCover(isbn, like);
  fetch("/api/swipe/liked", {
    method: "POST",
    body: JSON.stringify({ isbn }),
    headers: { "Content-Type": "application/json" },
  });
  bookFetch(chosenKeyWord);
};

// insert isbn into link
const bookCover = async (isbn, like) => {
  let coverURL = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
  bookImageEl.innerHTML = `<img src='${coverURL}'/>`;
  fetch(coverURL)
    .then((res) => res.text())
    .then((data) => {
      if (data === "not found" || data === "internal server error") {
        // let coverURL = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
        // coverURL = chosenLink;
        // console.log(coverURL);
        bookImageEl.innerHTML = `<h1>YOUR BOOK IS LOADING</h1>`;
        if (like) {
          console.log(isbn);
          // fetch('/api/swipe/liked', {
          //   method: 'POST',
          //   body: JSON.stringify({ isbn }),
          //   headers: { "Content-Type": "application/json" }
          // });
          console.log("Liked!");
          bookFetch(chosenKeyWord);
        } else {
          bookFetch(chosenKeyWord);
        }
      }
    });
};

likeCover.addEventListener("click", function () {
  bookFetchLike();
});

dislikeCover.addEventListener("click", function () {
  bookFetch(chosenKeyWord);
});

bookFetch(chosenKeyWord);

document.body.className = "body-class";
