var intro = function(game){
};

intro.prototype = {
  create: function(){
    var background = this.game.add.tileSprite(0, 0, 5000, 1920, 'background');
    var block = this.add.image(700, 300, '7');
    player = this.game.add.sprite(5, 770, 'player');
    this.physics.arcade.enable(player);
    createPlayer(player);
    player.body.velocity.x = 300;
    player.animations.play('right');
  },

  update: function(){
    if (player.x > 720) {
      player.kill();
      this.game.state.start("Game");
    };
  }
};