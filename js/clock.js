const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); // padStart는 문자를 지정한 숫자의 길이로 만들어주고 남는 자리를 뒤에 입력한 문자로 채워준다.
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock,1000); // 1000ms마다 지정한 함수 실행