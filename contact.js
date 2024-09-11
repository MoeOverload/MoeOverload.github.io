//accepting user input from contact form



let firstName;
let lastName;
let userEmail;
let userMessage;

document.getElementById("formSubmit").onclick = function(){
    firstName = document.getElementById("fname").value;
    lastName = document.getElementById("lname").value;
    userEmail = document.getElementById("email").value;
    userMessage = document.getElementById("message").value;

    document.getElementById("aNames").innerHTML = firstName + lastName;
    document.getElementById("aEmail").innerHTML = userEmail;
    document.getElementById("aMessage").innerHTML = userMessage

}



