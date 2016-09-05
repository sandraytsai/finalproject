var intro = function(game){
  console.log("intro animation");
};

intro.prototype = {
  create: function(){
    var background = this.game.add.tileSprite(0, 0, 5000, 1920, 'background');
    var gameself = this
    // animation goes here
    setTimeout(function() {
      gameself.game.state.start("Game");
    }, 500)
  }
};