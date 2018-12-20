$(document).ready(function(){
  $("#submit").click(function validate(event){
 var fullname = document.getElementById("fullname").value;
 var password = document.getElementById("password").value;
 if(fullname == ""){
     alert("Please enter a User Name")
     afterLogin.fullname.focus()
     return false;
 }
 if(password == ""){
     alert("Please enter a Password")
     afterLogin.password.focus()
     return false;
 }
 if( fullname == "mackenzie" && password == "fixed#120"){
     alert("Well done");
     window.location = "gameboard.html";
     return false;
 }
 else{
  alert("re-enter a correct password/fullname")
 }
   alert("welcome back!");
   window.location.href="index.html"
    event.preventDefault();
  });
});
