$(document).ready(function() {
  $("#formic form").submit(function(event) {

    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var conpassword = $('#conpassword').val();
    var Occupation = $('#work').val();
    var contact = $('#tel').val();
    var age = $('#agez').val();
    var data = [name, email, password, conpassword, Occupation, contact, age]
    event.preventDefault()

    if (name == '' || email == '' || Occupation == '' || password == '' || conpassword == '' || contact == '') {
      alert("invalid insert all fields");
      $("form")[0].reset();
    }
    else if (password !== conpassword) {
      alert("entered different password, please re-enter correct matching password");
      $("form")[0].reset();
    }
    else {
      alert('Welcome to new experienc
    }


  });
});
