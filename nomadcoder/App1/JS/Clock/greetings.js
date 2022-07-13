const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// function onLoginBtnClick() {
//   const username = loginInput.value;
//   if (username === "") {
//     console.log("Please write your name");
//   } else if (username.length > 15) {
//     alert("username must be at least 20 characters");
//   } else {
//   }
// }
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  painGreetings();
}

function painGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  painGreetings();
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

link.addEventListener("click", handleLinkClick);
