const toDoForm=document.querySelector("#todo-form");
const toDoList=document.querySelector("#todo-list");
const toDoInput=document.querySelector("#todo-form input")

let toDos = [];
const TODOS_KEY = "todos"
const saveToDos = localStorage.getItem(TODOS_KEY)

function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // object나 array를 string으로 저장.
}

function deleteToDo(event){
    const li = event.target.parentElement; // 버튼 누르면 버튼의 부모 태그인 li 삭제됨. 즉 해당 라인이 사라진다.
    li.remove();

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id=newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click",deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li); // html의 ul태그에 만들어준 li태그를 붙여줌. ul > li > span, button
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo(); //localStorage에 입력한 todo값 저장.
}
toDoForm.addEventListener("submit",handleToDoSubmit);

if(saveToDos !== null){ // localStorage가 차있으면 실행.
    const parseToDos = JSON.parse(saveToDos); // localStorage의 값들을 array형식으로 바꿈.
    toDos = parseToDos;
    parseToDos.forEach(element => {
        paintToDo(element);
    }); // array의 각 item에대해 하나의 함수 실행.
}