var menu = function(game) {
};

menu.prototype = {
  create: function(){
    var background = this.game.add.tileSprite(0, 0, 5000, 1920, 'mainbg');
    var playButton = this.game.add.button(380,440,"start-button",this.playIntro,this);
  },
  playIntro: function(){
    this.game.state.start("Intro");
  } 
}