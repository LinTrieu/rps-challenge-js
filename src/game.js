function Game(){
  this.WIN_CONDITIONS = {
    "Rock": "Scissors",
    "Paper": "Rock",
    "Scissors": "Paper",
    };
  this.options = ["Rock","Paper","Scissors"]
};

Game.prototype.play = function(userMove,computerMove) {
  if(userMove === computerMove) {
    return "It's a draw!";
    } else if(this.WIN_CONDITIONS[userMove] === computerMove) {
      return "You win!";
    } else {
      return "You lose!";
    }; 
};

Game.prototype.computerMove = function(){
  var randomChoice = this.options[Math.floor(Math.random()*this.options.length)];
  return randomChoice;
};