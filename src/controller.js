$(document).ready(function(){
  var game = new Game();
  var userWeapon;

  $("#userChoice").change(function() {
   userMove = $('#userChoice').val();
   game.play(userMove);
  });

  // $("#userSubmit").submit(function(event) {
  //   event.preventDefault();
  //  });

  // $('#userChoice').submit(function(event) {
  //  event.preventDefaul();
  //  var userWeapon = $('#userChoice').val();
  //  game.play(userWeapon);
  // });

});