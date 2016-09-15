var ending2 = function(game){
};

ending2.prototype = {
  create: function(){
    var background = this.game.add.tileSprite(0, 0, 800, 600, 'ending2');
    var nextButton = this.game.add.button(30,465,"endingbutton",this.theEnd,this);
  },
  theEnd: function(){
    this.game.state.start("Menu");
    shoot = this.add.audio('shoot');
    shoot.play();
  }
};