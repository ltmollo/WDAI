async function getInfo(){
    const response = await fetch("pracownicy.json");
    const result = await response.json();
    console.log("Loaded")
    return result;
}

var mySection = document.querySelector('section');
var workerName = document.getElementById("name");
var position = document.getElementById("position")
var image = document.getElementById("image")
var info = document.getElementById("info")

var id = 0;

function loadWorker(data){
    let worker = data[id];
    workerName.textContent = worker.name;
    position.textContent = worker.position;
    image.src = worker.img;
    info.textContent = worker.description;
}

async function sleep(){
    await new Promise(r => setTimeout(r, 1500))
}

async function loadPage(){
    let data = await getInfo();
    data = data.pracownicy;
    console.log(data)
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let random = document.getElementById("random");

    left.addEventListener("click", async function() {
        id = (id-1) % 3;
        if(id == -1){
            id = 2;
        }
        mySection.id = "moveLeft"
        await sleep();
        loadWorker(data);
        await sleep();
        mySection.removeAttribute('id');         
    });

    right.addEventListener("click", async function(){
        id = (id+1) % 3;

        mySection.id = "moveRight"
        await sleep();
        loadWorker(data);
        await sleep();
        mySection.removeAttribute('id');
    });

    random.addEventListener("click", async function(){
        id = Math.floor(Math.random()*3);
        
        mySection.id = "moveRight"
        await sleep();
        loadWorker(data);
        await sleep();
        mySection.removeAttribute('id');
    })
}

    loadPage()