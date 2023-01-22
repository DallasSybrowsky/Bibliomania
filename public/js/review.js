// This file contains the code for the review page  routes  and the API  routes  for the review page.
async function commentFormHandler(event) {
  event.preventDefault();
  const comment_text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  // this is the event handler for the functionality of the comment  form for the redirect  to the review  page  for the comment form
  if (comment_text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // this is the event handler for the functionality of the comment  form for the redirect  to the review  page  for the comment form
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}
document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
