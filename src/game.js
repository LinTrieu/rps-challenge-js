function Game(){
  this.WIN_CONDITIONS = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
    };
};

Game.prototype.play = function(userMove,randomMove) {
  if(userMove === randomMove) {
    return "DRAW";
    } else if(this.WIN_CONDITIONS[userMove] === randomMove) {
      return "WIN"
    } else {
      return "LOSE";
    };
};