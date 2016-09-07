var menu = function(game) {
};

menu.prototype = {
  create: function(){
    var background = this.game.add.tileSprite(0, 0, 5000, 1920, 'background');
    var title = this.game.add.sprite(this.world.centerX-60,100,"pinkblock");
    var playButton = this.game.add.button(this.world.centerX-12,320,"bullet",this.playIntro,this);
  },
  playIntro: function(){
    this.game.state.start("Intro");
  } 
}