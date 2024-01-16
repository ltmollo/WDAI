var info = document.getElementById("pressed");

let first = document.getElementById("blue");
first.addEventListener("click", blueDiv, false);

let second = document.getElementById("red");
second.addEventListener("click", redDiv, false);

let third = document.getElementById("yellow");
third.addEventListener("click", yellowDiv, false);

let resetBtn = document.getElementById("resetBtn");
resetBtn = resetBtn.addEventListener("click", reset);

let changeBtn = document.getElementById("change");
changeBtn = changeBtn.addEventListener("click", change);

let propagationBtn = document.getElementById("propagation");
propagationBtn = propagationBtn.addEventListener("click", propagation);

var counter = 0;

var secondBtn = true; //checks if button is active
var thirdBtn = true;
var direction = false;
var infoPlace = 0;
var maxInfo = 3;

function blueDiv(){
    if(!propagation){
        resetInfo();
        event.stopPropagation();
    }
    if(event.target == this || direction){
        resetInfo();
    }
    
    let infoBlue = document.getElementById("pressed" + infoPlace);
    let info1 = document.getElementById("pressed0").textContent;
    let info2 = document.getElementById("pressed1").textContent;
    let info3 = document.getElementById("pressed2").textContent;
    let myInfo = "Nacisnąłeś niebieski przycisk o wartości 1";    

    if(infoBlue.textContent !== "" || info1 == myInfo ||  info2 == myInfo || info3 == myInfo){
        resetInfo();
    }

    infoPlace = (infoPlace+1)%maxInfo;
    infoBlue.textContent = myInfo;
    counter += 1;
    checkCounter();
}

function redDiv(){
    if(!propagation){
        resetInfo();
        event.stopPropagation();
    }

    if(event.target == this && !direction){
        resetInfo();
    }
    let infoRed = document.getElementById("pressed" + infoPlace);
    infoPlace = (infoPlace+1)%maxInfo;
    infoRed.textContent = "Nacisnąłeś przycisk czerwony o wartości 2"
    counter += 2;
    checkCounter();
}

function yellowDiv(){
    if(!propagation){
        resetInfo();
        event.stopPropagation();
    }
    if(event.target == this && !direction){
        resetInfo();
    }
    let infoYellow = document.getElementById("pressed" + infoPlace);
    infoPlace = (infoPlace+1)%maxInfo;
    infoYellow.textContent = "Nacisnąłeś przycisk żółty o wartości 5"
    counter += 5;
    checkCounter();
}

function propagation(){
    propagation = !propagation;

    let button = document.getElementById("propagation");
    if(propagation === false){
    button = button.textContent = "Propagation in Off";
    }
    else{
        button = button.textContent = "Propagation in On";
    }
}

function checkCounter(){
    let third = document.getElementById("yellow");
    let second = document.getElementById("red");

    if(secondBtn === true && counter >= 30){
        secondBtn = false;
        maxInfo = 2;
        second.style.backgroundColor = "grey";
        second = second.removeEventListener("click", redDiv, direction);
       
    }
    if(thirdBtn === true && counter >= 50){
        thirdBtn = false;
        maxInfo = 1;
        third.style.backgroundColor = 'grey';
        third = third.removeEventListener("click", yellowDiv, direction);
    }
    showResult();
}

function reset(){
    counter = 0;
    resetInfo();
    maxInfo = 3;

    let first = document.getElementById("blue");
    first = first.addEventListener("click", blueDiv, direction);
    let infoBlue = document.getElementById("pressed0");
    infoBlue.textContent = "Naciśnij przycisk";

    let second = document.getElementById("red");
    second.style.backgroundColor = "red";
    second = second.addEventListener("click", redDiv, direction);

    let third = document.getElementById("yellow");
    third.style.backgroundColor = "yellow"
    third = third.addEventListener("click", yellowDiv, direction);  

    secondBtn = true;
    thirdBtn = true;

    showResult();
}

function change(){
    if(secondBtn === true){
        let second = document.getElementById("red");
        second.removeEventListener("click", redDiv, direction);
        second = second.addEventListener("click", redDiv, !direction);
    }

    if(thirdBtn === true){
        let third = document.getElementById("yellow");
        third.removeEventListener("click", yellowDiv, direction);
        third = third.addEventListener("click", yellowDiv, !direction);
    }

    let first = document.getElementById("blue");
    first.removeEventListener("click", blueDiv, direction);
    first.addEventListener("click", blueDiv, !direction);
    direction = !direction;
}

function resetInfo(){
    let infoBlue = document.getElementById("pressed0");
    let infoRed = document.getElementById("pressed1");
    let infoYellow = document.getElementById("pressed2");
    infoBlue.textContent = "";
    infoRed.textContent = "";
    infoYellow.textContent = "";
    infoPlace = 0;
}


function showResult(){
    let result = document.getElementById("result")
    result.innerText = "Twój wynik to: " + counter;
}