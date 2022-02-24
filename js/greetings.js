const loginForm=document.querySelector(".before-login form");
const loginInput=loginForm.querySelector(".before-login #username");
const greeting=document.querySelector("#greeting");
const beforeLogin=document.querySelector(".before-login");
const afterLogin=document.querySelector(".after-login");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username); 
}

function paintGreetings(username){
    beforeLogin.classList.add("hidden");
    afterLogin.classList.remove("hidden");
    greeting.innerText=`Hello ${username}.`; 
}

if(savedUsername === null){
    loginForm.addEventListener("submit",onSubmit); 
}
else{
    paintGreetings(savedUsername)
}

