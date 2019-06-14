function Game(){
  this.WIN_CONDITIONS = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
    };
  this.options = ["Rock","Paper","Scissors"]
};

Game.prototype.play = function(userMove,computerMove) {
  if(userMove === computerMove) {
    return "DRAW";
    } else if(this.WIN_CONDITIONS[userMove] === computerMove) {
      return "WIN"
    } else {
      return "LOSE";
    };
};

Game.prototype.computerMove = function(){
  var randomChoice = this.options[Math.floor(Math.random()*this.options.length)];
  return randomChoice;
};