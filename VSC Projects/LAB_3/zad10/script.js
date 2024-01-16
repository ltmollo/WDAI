let board = document.getElementById("board");
board.addEventListener("click", followMouse)

let section = document.getElementById("window")
section.addEventListener("click", showInfo)

async function followMouse(){
    let ball = document.getElementById("ball");
    ball.style.top = event.clientY - 30 + "px"
    ball.style.left = event.clientX - 30 + "px"
    event.stopPropagation()
    let info = document.getElementById("info");
    info.style.opacity = 0;
}

function showInfo(){
    let info = document.getElementById("info");
    let wrong = document.getElementById("wrong");
    info.style.top = event.clientY + "px";
    info.style.left = event.clientX + "px";
    info.style. transitionDuration = '1s'
    wrong.textContent = "Kliknięto poza obszar";
    info.style.opacity = 1;
}

