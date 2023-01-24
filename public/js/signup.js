// these are the event handlers for the sliders on the login and the signup 
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// this is the event handler for the sliders on the login and the signup for animation
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

//  this is the event handler for the sliders on the login and the signup for animation
signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// this is the function for the functionality of the login and the signup  forms 
const loginFormHandler = async (event) => {
  event.preventDefault();

  // this is  the functionality   for the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  console.log(email);
  console.log(password);
  // this is  the functionality   for the login form
  if (email && password) {
    // Send a POST request to the API endpoint for the login  form  in the backend user routes this is the body that we are sending to the backend
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      // If successful, redirect the browser to the bookswipe  page  for the login form
      document.location.replace("/bookswipe");
    } else {
      alert(response.statusText);
    }
  }
};
// this is the function for the functionality of the signup  form
const signupFormHandler = async (event) => {
  event.preventDefault();
// this is the functionality of the signup  form
  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
// this is  the functionality of the signup  form
  if (name && email && password) {
    // Send a POST request to the API endpoint for the signup  form  in the backend user routes this is the body that we are sending to the backend  to the create user route  
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
// this is the event  functionality of the signup  form  for the redirect  to the bookswipe  page  for the signup form
    if (response.ok) {
      document.location.replace("/bookswipe");
    } else {
      alert(response.statusText);
    }
  }
};
// Event handlers for the functionality for the login  form  
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

//  Event handlers for the functionality for the signup  form    
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
