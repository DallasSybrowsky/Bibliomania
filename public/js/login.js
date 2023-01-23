// This file is for the login page  routes  and the API  routes  for the login page.
const loginFormHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to sign up.");
    }
  }
};
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
