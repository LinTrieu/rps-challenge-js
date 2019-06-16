$(document).ready(function(){
  var game = new Game();

  $('#userChoice').change(function() {
   var user = $('#userChoice').val();
   var random = game.computerMove();
   var result = game.play(user,random);
   console.log(user)
   console.log(random)
   console.log(result)
   $('#user-position').text(`You played: ${user}`)
   $('#computer-position').text(`Computer played: ${game.computerMove()}`)
   $('#game-result').text(`Result: ${result}`)
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