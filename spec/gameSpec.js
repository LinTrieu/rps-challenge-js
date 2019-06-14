describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('game exists', function(){
    expect(game).toEqual(jasmine.any(Game));
  });

  it('user can have a weapon', function(){
    expect(game.weapon).toBeDefined();
  });

  

});