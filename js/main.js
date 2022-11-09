var storedValue = localStorage.getItem("name");
var storedVal = localStorage.getItem("tel");
var storedV = localStorage.getItem("date");
var storedValue = localStorage.getItem("message");


function store(){
     var inputEmail= document.getElementById("email");
     localStorage.setItem("email", inputEmail.value);
    }