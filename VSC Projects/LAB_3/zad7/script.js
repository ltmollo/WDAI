async function fetchInfo(){
    const response = await fetch("http://localhost:3000/cities");
    const information = await response.json();
    console.log("working");

    return information;
}

function getAnswerA(data){
    const filtered = data.filter(function (city) {
        return city.province === "małopolskie";
    });

    let result = "";

    for (let city of filtered) {
        result += city.name + ", ";
    }

    result = result.substr(0, result.length - 2);
    result += ".";
    let answer = document.getElementById("answerA");
    answer.textContent = result;
}

function checkTwoA(word){
    let counter = 0;
    for(let letter of word){
        if(letter === 'a'){
            counter++;
            if(counter === 2){
                return true;
            }
        }
    }
    return false;
}

function getAnswerB(data){
    let result = "";
    for (let city of data) {
        if(checkTwoA(city.name)){
            result += city.name + ", ";
        }
    }
    result = result.substr(0, result.length - 2);
    result += ".";
    let answer = document.getElementById("answerB");
    answer.textContent = result;
}

function getAnswerC(data){
    let toSort = [];
    for (let city of data) {
        toSort.push([city.name, city.dentensity]);
    }
    toSort.sort(function(a, b) {
        if (a[1] < b[1]){
            return 1
        }
        if (a[1] > b[1]){
            return -1
        }
        return 0
    });

    let result = toSort[4][0];
    let answer = document.getElementById("answerC");
    answer.textContent = "Piątym pod względem gęstości miastem jest: " + result + ".";
}

function getAnswerD(data){
    let result = "";
    let filtered = data.filter(function (city){
        return city.people > 100000;
    });

    for(let city of filtered){
        result += city.name + " city, ";
    }

    result = result.substr(0, result.length - 2);
    result += ".";
    let answer = document.getElementById("answerD");
    answer.textContent = result + ".";
}

function getAnswerE(data){
    let more = 0;
    let less = 0;
    for(let city of data){
        if(city.people > 80000){
            more++;
        }
        else if(city.people < 80000){
            less++;
        }
    }

    let answer = document.getElementById("answerE");
    let option1 = "Więcej jest miast powyżej 80 000 mieszkańców, a ich liczba wynosi: "
    let option2 = "Więcej jest miast poniżej 80 000 mieszkańców, a ich liczba wynosi: "
    let option3 = "Miast powyżej i poniżej 80 000 mieszkańców jest tyle samo, a ich liczba wynosi: "

    if(more > less){
        answer.textContent = option1 + " " + more + ".";
    }
    else if(more < less){
        answer.textContent = option2 + " " + less + ".";
    }
    else{
        answer.textContent = option3 + " " + less + ".";
    }
}

function getAnswerF(data){
    let surface = 0;
    let nbOfcities = 0;

    for(let city of data){
        if(city.township.charAt(0) == 'P' ){
            surface += city.area;
            nbOfcities++;
        }
    }
    console.log(nbOfcities);
    let result = surface/nbOfcities;
    let answer = document.getElementById("answerF");
    answer.textContent = "Średnia powierzchnia szukanych miast wynosi: " + result + ".";
}

function getAnswerG(data){
    let filtered = data.filter(function (city){
        return city.province === "pomorskie";
    })

    let nbOfGreaterCities = 0;
    for(let city of filtered){
        if(city.people > 5000){
            nbOfGreaterCities++;
        }
    }
    let option1 = "Wszystkie miasta z woj. pomorskiego są większe od 5 000, jest ich: ";
    let option2 = "Nie wszystkie miasta z woj. pomorskiego są większe od 5 000, większych jest tylko: "

    let answer = document.getElementById("answerG");
    if(nbOfGreaterCities == filtered.length){
        answer.textContent = option1 + nbOfGreaterCities + ".";
    }
    else{
        answer.textContent = option2 + nbOfGreaterCities + ".";
    }
}

async function loadPage(){
    const data = await fetchInfo();
    getAnswerA(data);
    getAnswerB(data);
    getAnswerC(data);
    getAnswerD(data);
    getAnswerE(data);
    getAnswerF(data);
    getAnswerG(data);
}

loadPage();