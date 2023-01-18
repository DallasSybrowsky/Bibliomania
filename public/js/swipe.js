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
/*
 ======== Instagram - ronakgiriraj ======== 
 ======== Github - ronakgiriraj ======== 
 ======== Youtube - ronakgiriraj ======= 
 ======== Linkedin - ronakgiriraj =======
*/
let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");

const handleNextClick = () => {
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  currentGroup.dataset.status = "after";

  nextGroup.dataset.status = "becoming-active-from-before";

  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

const handlePreviousClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  currentGroup.dataset.status = "before";

  nextGroup.dataset.status = "becoming-active-from-after";

  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
};
