let start = document.getElementById("testBtn");
start = start.addEventListener("click", count);

let change = document.getElementById("changeEvent");
change = change.addEventListener("click", remove);

var counter = 0;

function count(){
    counter += 1;
    let info = document.getElementById("text");
    info.innerText="Licznik kliknięć: " + counter;
}

function remove(){
    let start = document.getElementById("testBtn");
    let change = document.getElementById("changeEvent");

    counter = 0;
    let info = document.getElementById("text");
    info.innerText="Licznik zrestartowano";

    start.removeEventListener("click", count);
    change.removeEventListener("click", remove);
    change.addEventListener("click", add);
    change.textContent = "Add event"
}

function add(){
    let start = document.getElementById("testBtn");
    let change = document.getElementById("changeEvent");
    
    start.addEventListener("click", count);
    change.removeEventListener("click", add);
    change.addEventListener("click", remove);
    change.textContent = "Delete event";
    let info = document.getElementById("text");
    info.innerText="Licznik działa";
}