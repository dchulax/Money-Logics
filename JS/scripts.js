$(document).ready(function() {
      $("#signup").click(function() {
        var name = $(#name).val();
        var email = $(#email).val();
        var password = $(#password).val();
        var conpassword = $(#conpassword).val();
        var Occupation = $(#work).val();
        var contact = $(#tel).val();
        var age = $(#agez).val();
        if (name == '' || email || Occupation || password || conpassword || contact) {
alert("invalid insert all fields");
} else if (!(password).match(conpassword)) {
  alert("entered different password, please re-enter correct matching password")
}
$.post("register.php", {
name1: name,
email1: email,
password1: password,
Occupation1: Occupation,
age1 = age,
contact1 = contact,
}, function(data) {
if (data == 'Welcome to new experience of greatness....') {
$("form")[0].reset();
}
alert(data);
});
}
});
});
