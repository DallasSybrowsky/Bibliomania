async function newFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector('input[name="post-title"]').value;
  const post_text = document.querySelector('textarea[name="post-text"]').value;
  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}
document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

// create a new post
async function createPostHandler(event) {
  event.preventDefault();
  document.location.replace("/dashboard/new");
}
document
  .querySelector("#create-new-post")
  .addEventListener("click", createPostHandler);
