var ending2 = function(game){
};

ending2.prototype = {
  create: function(){
    var background = this.game.add.tileSprite(0, 0, 800, 600, 'ending2');
    var nextButton = this.game.add.button(30,465,"endingbutton",this.theEnd,this);
    bgmusic = this.add.audio('bgmusic', 0.3, true);
    bgmusic.play();
    applause = this.add.audio('applause', 0.5, false);
    applause.play();
  },
  theEnd: function(){
    this.game.state.start("Menu");
    shoot = this.add.audio('shoot');
    shoot.play();
    bgmusic.stop();
    applause.stop();
  }
};