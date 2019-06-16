$(document).ready(function(){
  var game = new Game();

  $('#userChoice').change(function() {
   var user = $('#userChoice').val();
   var random = game.computerMove();
   var result = game.play(user,random);
   $('#user-position').text(`You played: ${user}`);
   $('#computer-position').text(`Computer played: ${random}`);
   $('#game-result').text(result)
   console.log(user);
   console.log(random);
   console.log(result);
  });
  

  // $('#userSubmit').submit(function(event) {
  //   event.preventDefault();
  //   var userMove = $('#userChoice').val();
    
  // });

  // $('#userChoice').submit(function(event) {
  //  event.preventDefaul();
  //  var userWeapon = $('#userChoice').val();
  //  game.play(userWeapon);
  // });

});