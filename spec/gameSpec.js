describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('game exists', function(){
    expect(game).toEqual(jasmine.any(Game));
  });


});