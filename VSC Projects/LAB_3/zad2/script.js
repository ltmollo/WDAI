const nbOfImages=3;
const first= "gory0.jpg";
const second= "gory1.jpg";
const third= "gory2.jpg";
const images = [first, second, third];

let start = document.querySelector('#myButton');
start = start.addEventListener("click", imageSwap);

var flag = 0;

function imageSwap(){
    let elem = document.querySelector("img");
    flag++;
    elem.setAttribute("src", images[flag%nbOfImages]);
    elem.className= "image" + (flag%nbOfImages);
}