var ending = function(game){
};

ending.prototype = {
  create: function(){
    var background = this.game.add.tileSprite(0, 0, 5000, 1920, 'background');
    var block = this.add.image(700, 300, '7');
    var endingtext = this.add.text(300, 75, 'ENDING ANIMATION HERE', { fontSize: '24px', fill: '#000' });
    player = this.game.add.sprite(5, 770, 'player');
    this.physics.arcade.enable(player);
    createPlayer(player);
    player.body.velocity.x = 300;
    player.animations.play('right');
    var gameself = this;
    setTimeout(function() {
      gameself.game.state.start("Menu");
    }, 3000);
  },

  update: function(){
    if (player.x > 720) {
      player.kill();
    };
  }
};