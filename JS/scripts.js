$(document).ready(function(){
  $("#sign").submit(function(){
   var name;
   name=$("#name").val();
   alert(name);
   event.preventDefault();
  });
});
