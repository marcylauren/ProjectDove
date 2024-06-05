document.querySelector("#add").addEventListener('click', function() {
  let titleInput = document.querySelector("#title");
  let descInput = document.querySelector("#description");
  let linkInput = document.querySelector("#link");
  let usernameInput = document.querySelector("#userName");

  let post = document.createElement("div");
  let title = document.createElement("h1");
  let description = document.createElement("p");
  let link = document.createElement("a");
  let username = document.createElement("p");

  title.textContent = titleInput.value;
  description.textContent = descInput.value;
  link.href = linkInput.value;
  link.textContent = linkInput.value;
  username.textContent = usernameInput.value;

  post.appendChild(title);
  post.appendChild(description);
  post.appendChild(link);
  post.appendChild(username);
  document.body.appendChild(post);

  post.style.borderStyle = 'solid';
  post.style.borderColor = 'black';
  post.style.backgroundColor = 'white';
  post.style.display = 'flex';
  post.style.flexDirection = 'column';
});
