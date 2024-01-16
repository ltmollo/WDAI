let create = document.getElementById("add");
create = create.addEventListener("click", newContact);

let delet = document.getElementsByClassName("delete");
console.log(delet);
Array.from(delet).forEach(element =>
    element.addEventListener("click", drop)
  );

function drop(){
    this.closest("div").remove();
}

function require(){
    let name = document.getElementById("fname");
    let phone = document.getElementById("number");
    return name.checkValidity() && phone.checkValidity() && name.value != "" && phone.value != "";
}

function newContact(){
    if(!require()){
        alert("Nieprawidłowy format danych");
        return
    }
    let section = document.getElementById("section");

    let newElement = document.createElement("div");
    newElement.className = "contact"

    let newContainer = document.createElement("div");
    newContainer.className = "container"

    let namePara = document.createElement("p");
    let nameInput = document.getElementById("fname")
    namePara.textContent = nameInput.value;
    
    let phonePara = document.createElement("p");
    let numberInput = document.getElementById("number")
    phonePara.textContent = numberInput.value;

    newContainer.appendChild(namePara);
    newContainer.appendChild(phonePara);

    let newButton = document.createElement("button")
    newButton.addEventListener("click", drop);
    newButton.className = "delete";

    let image = document.createElement("img");
    image.src = "bin.png";

    newButton.appendChild(image)

    newElement.appendChild(newContainer);
    newElement.appendChild(newButton);

    section.appendChild(newElement);

    nameInput.value="";
    numberInput.value="";
}
