var menu = function(game){
  console.log("game menu")
}

menu.prototype = {
  create: function(){
    var background = this.game.add.tileSprite(0, 0, 1920, 1920, 'background');
    var title = this.game.add.sprite(this.world.centerX-60,100,"pinkblock");
    var playButton = this.game.add.button(this.world.centerX-12,320,"bullet",this.playGame,this);
  },
  playGame: function(){
    console.log("playgame called");
    this.game.state.start("Game");
  } 
}