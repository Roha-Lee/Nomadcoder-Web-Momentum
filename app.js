const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_ELEMENT = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_ELEMENT);
    greeting.innerText = `Hello ${username}. Nice to meet you!`
    greeting.classList.remove(HIDDEN_ELEMENT);
}

loginForm.addEventListener("submit", onLoginSubmit);
