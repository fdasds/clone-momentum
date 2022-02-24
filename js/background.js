const imgs = ["0.jpeg","1.jpeg","2.jpeg"];

randomNum = Math.floor(Math.random() * imgs.length);
const chosenImg = imgs[randomNum];

const url = `url(img/${chosenImg})`;

document.body.style.backgroundImage = url;