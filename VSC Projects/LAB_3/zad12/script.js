var score;
var health;
var gameRunning;

let start = document.getElementById("start");
start.addEventListener("click", startGame)

function missed(){
    score -= 6;
    console.log("missed")
    updateScore();
}

function shooted(){
    this.classList.add("shooted")
    this.remove();
    score += 12;
    updateScore();
}

function updateScore(){
    let displayScore = document.getElementById("score");
    displayScore.textContent = "Score: " + score;
}

function updateHealth(){
    let displayHealth = document.getElementById("health");
    if(health == 2){
        displayHealth.textContent = '❤️❤️';
    }
    else if(health == 1){
        displayHealth.textContent = '❤️';
    }
    else{
        displayHealth.textContent = '💔';
    }
}


function animateZombie(zombie, speed){
    const newBgPosition = 200;
    var currBgPoss = 1800;
    var currZombPoss = 0;
    var interval;

    switch(speed){
        case 1:
            interval=50;
            break;
        case 2:
            interval=40;
            break;
        case 3:
            interval=30;
            break;
        case 4:
            interval=25;
            break;
        case 5:
            interval=15;
            break;
        default:
            interval=50;
            break;
    }

    
    var runningZombie = setInterval(() => {
        zombie.style.backgroundPosition = currBgPoss - newBgPosition + "px 0px";
        currBgPoss -= 200;
        zombie.style.left = 110 - currZombPoss +"vw"
        currZombPoss += 1
        if (currBgPoss == 0){
            currBgPoss = 1800;
        }
        if (currZombPoss == 140){
            if ((zombie.classList.length == 1)){
                zombie.remove();
                health -= 1
                score -= 6
                if(health == 0){
                    gameOver();
                }
                updateScore();
                updateHealth();
            }
            clearInterval(runningZombie);
        }

    }, interval)
}

window.addEventListener("mousemove", followcursor);

function followcursor(e){
    let cursor = document.getElementById("mouse")
    cursor.eventPropagation
    cursor.style.top = e.pageY -15 + "px";
    cursor.style.left = e.pageX -15 + "px";
}

function gameOver(){
    let yourScore = document.getElementById("yourScore");
    yourScore.textContent = "Your score: " + score;
    let displayScore = document.getElementById("score");
    displayScore.style.display = "none";
    clearInterval(gameRunning);
    document.querySelectorAll(".zombie").forEach(function(zombie){
        zombie.remove();
    });
}

function createZombie(speed, top, size){
    let newZombie = document.createElement('div');
    newZombie.setAttribute("class", "zombie")
    document.body.appendChild(newZombie)
    newZombie.addEventListener("click", shooted);
    newZombie.style.top = 50 + top + "vh";
    newZombie.style.transform = "scale(" + size + ")";
    animateZombie(newZombie, speed)
}

function atributes(){
    let speed = Math.floor(Math.random()* 5.99);
    let top = Math.floor(Math.random()*30);
    let size = Math.round(((Math.random()*4+7)/12)*100)/100
    createZombie(speed, top, size)
}

function updateCounter(elem){
    let counter = document.getElementById("counter");
    counter.textContent = elem;
}

async function startGame(){
    this.style.display = "none";
    score = 0;
    health = 3;
    setTimeout(() =>{
    let board = document.getElementById("board");
    board.addEventListener("click", missed);
    }, 50)
    updateScore();
    gameRunning = setInterval ( () => {
        atributes();
    }
    , 500);
}