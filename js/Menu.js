var menu = function(game){
  console.log("game showing menu")
}

menu.prototype = {
  create: function(){
    var background = this.game.add.tileSprite(0, 0, 1920, 1920, 'background');
    var menu = this.game.add.sprite(160,160,"pinkblock");
    menu.anchor.setTo(0.5,0.5);
    var playButton1 = this.game.add.button(160,320,"bullet",this.playFirstGame,this);
    playButton1.anchor.setTo(0.5,0.5);
    var playButton2 = this.game.add.button(200,320,"diamond",this.playSecondGame,this);
    playButton2.anchor.setTo(0.5,0.5);
  },
  playFirstGame: function(){
    console.log("playfirstgame called");
    this.game.state.start("Game1");
  },
  playSecondGame: function(){
    console.log("playsecondgame called");
    this.game.state.start("Game2");
  }
}