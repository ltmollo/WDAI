var newPassword = document.getElementById("pwd");
newPassword.addEventListener("input", eightChar);
newPassword.addEventListener("input", specialChar);
newPassword.addEventListener("input", oneCapital);
newPassword.addEventListener("input", oneDigit);

let showPass = document.getElementById("showPass")
showPass.addEventListener("click", showPassword)
let showRep = document.getElementById("showRep")
showRep.addEventListener("click", showPassword)

let confirm = document.getElementById("confirm");
confirm.addEventListener("click", checkPasswords)

let repeated = document.getElementById("repeated")
repeated.addEventListener("keypress", function(){
    if( event.key === "Enter"){
        checkPasswords();
    }
} )

var specialChar = "[!@#$%^&*()-+[{}|:\"<>?~/\-={\]}/,.]".split('');
var requirement_1_Passed = false;
var requirement_2_Passed = false;
var requirement_3_Passed = false;
var requirement_4_Passed = false;


function eightChar(){
    let req1 = document.getElementById("img1")
    if(newPassword.value.length >= 8){
        req1.src = "done.png"
        requirement_1_Passed = true
    }
    else if(requirement_1_Passed == true){
        req1.src = "unclicked.png";
        requirement_1_Passed = false;
    }
}

function specialChar(){
    let req2 = document.getElementById("img2");
    
    if(specialChar.some(checkSpecialChar)){
        req2.src = "done.png"
        requirement_2_Passed = true;
    }
    else if (requirement_2_Passed) {
        req2.src= "unclicked.png";
        requirement_2_Passed = false
    }
}

// metoda split(arg) tworzy tablicę stringów dzieląc string wg arg
// metoda some() zwraca prawdę przy pierwszym napotkanym znaku specialnym
function checkSpecialChar(x){
    return newPassword.value.includes(x);
}

function oneCapital(){
    let req3 = document.getElementById("img3");
    const capitalLetters = /[A-Z]/;

    if(newPassword.value.match(capitalLetters)){
        requirement_3_Passed = true 
        req3.src = "done.png"
    }

    else if(requirement_3_Passed) {
        requirement_3_Passed = false; 
        req3.src= "unclicked.png";
    }
}

function oneDigit(){
    let req4 = document.getElementById("img4");
    const digits = /[0-9]/;

    if(newPassword.value.match(digits)){
        req4.src = "done.png"
        requirement_4_Passed = true;
    }
    else if(requirement_4_Passed){
        req4.src= "unclicked.png";
        requirement_4_Passed = false;
    }
}

function checkPasswords(){
    let repeated = document.getElementById("repeated");
    if(requirement_1_Passed && requirement_2_Passed && requirement_3_Passed && requirement_4_Passed){
        if(repeated.value == newPassword.value){
            alert("Poprawnie utworzyłeś hasło");
        }
        else{
            alert("Wprowadzone hasła nie są identyczne");
        }
    
    }
    else{
        alert("Nie spełniono wymaganych warunków");
    }
}

function showPassword() {
    if(event.target == document.getElementById("showPass")){
        var x = newPassword;
        var y = document.getElementById("show1");
    }
    else{
        var x = document.getElementById("repeated");
        var y = document.getElementById("show2");
    }
    
    if (x.type === "password") {
      x.type = "text";
      y.style.backgroundImage = "url('hide.png')";
    } else {
      x.type = "password";
      y.style.backgroundImage = "url('eye.png')";
    }
}
