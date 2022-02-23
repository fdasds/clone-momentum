const loginForm=document.querySelector("#login-form");
const loginInput=loginForm.querySelector("input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); //id가 login-form인 태그에 hidden 클래스 추가
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);

    paintGreetings(username); 
}

function paintGreetings(username){
    greeting.innerText=`Hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME); //id가 greeting인 태그에 hidden클래스 제거
}

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME); 
    loginForm.addEventListener("submit",onSubmit); 
}
else{
    paintGreetings(savedUsername)
}

