// async function signupFormHandler(event) {
//   event.preventDefault();
//   const username = document.querySelector("#username-signup").value.trim();
//   const password = document.querySelector("#password-signup").value.trim();
//   if (username && password) {
//     const response = await fetch("/api/users", {
//       method: "post",
//       body: JSON.stringify({
//         username,
//         password,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (response.ok) {
//       document.location.replace("/dashboard");
//     } else {
//       alert(response.statusText);
//     }
//   }
// }
// document
//   .querySelector(".signup-form")
//   .addEventListener("submit", signupFormHandler);
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
