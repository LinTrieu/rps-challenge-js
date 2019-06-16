$(document).ready(function(){
  var game = new Game();
  
  $('#userSubmit').click(function(event) {
    var user = $('#userChoice').val();
    event.preventDefault();
    var random = game.computerMove();
    var result = game.play(user,random);
    $('#user-position').text(`You played: ${user}`);
    $('#computer-position').text(`Computer played: ${random}`);
    $('#game-result').text(result)
    console.log(user);
    console.log(random);
    console.log(result);
  });
  
  
  $(window).load(function() {
    alert( "Welcome! Let's play Rock, Paper, Scissors" );
  });

});