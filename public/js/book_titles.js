// This file is used to fetch the book titles from the Open Library API and display them on the bookswipe page.
const titleFetch = async (isbn) => {
  let coverURL = `https://openlibrary.org/isbn/${isbn}.json`;
  const response = await fetch(coverURL);
  const data = await response.json();
  console.log(isbn);
  console.log(data);
  if (!data.title) {
    console.log("Not found");
  } else {
    return data.title;
  }
};
//  This file is used to fetch the book titles from the Open Library API and display them on the bookswipe page.
const parentEl = document.querySelector(".like-div").children;

const array = [];

const getisbn = async () => {
  for (let i = 0; i < parentEl.length; i++) {
    const element = parentEl[i];
    const id = element.id;
    array.push(id);
  }
  for (let x = 0; x < array.length; x++) {
    const isbn = array[x];
    const title = await titleFetch(isbn);
    document.getElementById(isbn).textContent = title;
    console.log(title);
  }
};

getisbn();
