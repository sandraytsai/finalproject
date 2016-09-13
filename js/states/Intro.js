var intro = function(game){
};

intro.prototype = {
  create: function(){
    var background = this.game.add.tileSprite(0, 0, 5000, 1920, 'intro-background');
    player = this.game.add.sprite(5, 490, 'player');
    player.scale.setTo(0.75,0.75);
    this.physics.arcade.enable(player);
    player.body.velocity.x = 250;
    player.animations.add('right', [2,3,4,3], 6, true);
    player.animations.play('right');
  },

  update: function(){
    if (player.x > 700) {
      player.kill();
      this.game.state.start("Game");
    };
  }
};