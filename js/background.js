const imgs = ["0.jpeg","1.jpeg","2.jpeg"];

randomNum = Math.floor(Math.random() * imgs.length);
const chosenImg = imgs[randomNum];

const bgImg = document.createElement("img"); // javaScript에서 html element 생성
bgImg.src=`img/${chosenImg}`;

document.body.appendChild(bgImg) // body에 html추가

