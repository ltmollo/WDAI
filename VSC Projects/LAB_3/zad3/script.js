let start = document.getElementById("add");
start = start.addEventListener("click", dodaj);

let end = document.getElementById("delete");
end = end.addEventListener("click", usun);

function drop(){
    console.log("nic")
}

function usun(){
    let list= document.getElementById("test");
    list.removeChild(list.childNodes[0]);
}

function dodaj(){
    let list = document.getElementById("test");
    let newElement = document.createElement("li");
    let count = document.querySelectorAll("li").length + 1;
    newElement.textContent = "item nr" + count;
    list.appendChild(newElement);
}
