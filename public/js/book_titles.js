

const titleFetch = async (isbn) => {
  let coverURL = `https://openlibrary.org/search.json?q=${isbn}`;
  const response = await fetch(coverURL);
  const data = await response.json();

  if (!data.docs[0].title) {
    console.log("Not found");

  } else { 
    // console.log(data.docs[0].title); 
    return data.docs[0].title;
  }
};

// titleFetch("9780618968633");

const parentEl = document.querySelector(".like-div").children;
// console.log(parentEl);

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


// for (const key in parentEl) {
//   console.log(key[0].id);
// }



