var menu = function(game) {
};

menu.prototype = {
  create: function(){
    var background = this.game.add.tileSprite(0, 0, 5000, 1920, 'background');
    var title = this.game.add.image(340,100,"pinkblock");
    var playButton = this.game.add.button(250,320,"start-button",this.playIntro,this);
  },
  playIntro: function(){
    this.game.state.start("Intro");
  } 
}