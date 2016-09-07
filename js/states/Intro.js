var intro = function(game){
  console.log("intro animation");
};

intro.prototype = {
  create: function(){
    var background = this.game.add.tileSprite(0, 0, 5000, 1920, 'background');
    var block = this.add.image(700, 300, '50x300');
    player = this.game.add.sprite(5, 770, 'player');
    this.physics.arcade.enable(player);
    createPlayer(player);
    player.body.velocity.x = 100;
    player.animations.play('right');
    var gameself = this
    // animation goes here
    setTimeout(function() {
      gameself.game.state.start("Game");
    }, 9000)
  },

  update: function(){
    if (player.x > 720) {
      player.kill();
    };
  }
};