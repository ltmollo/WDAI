function myFunction(){
    let imie = prompt("Podaj imie");
    if (imie[imie.length-1] === "a"){
        document.getElementById("hello").innerHTML += " Pania : " + imie;
    }
    else{
        document.getElementById("hello").innerHTML += " Pana :" + imie;
    }
}