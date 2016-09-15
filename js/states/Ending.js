var ending1 = function(game){
};

ending1.prototype = {
  create: function(){
    var background = this.game.add.tileSprite(0, 0, 800, 600, 'ending1');
    player = this.game.add.sprite(0, 470, 'player');
    this.physics.arcade.enable(player);
    player.body.velocity.x = 50;
    player.body.velocity.y = -17;
    player.animations.add('right', [2,3,4,3], 3, true);
    player.animations.play('right');
  },

  update: function(){
    if (player.x > 65) {
      player.kill();
      this.game.state.start("Ending2");
    };
  }
};