createPlayer = function(player) {
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 300;
  player.body.collideWorldBounds = true;

  player.animations.add('left', [8,9,10,9], 6, true);
  player.animations.add('right', [3,4,5,4], 6, true);
};

playerFalls = function() {
  if (player.body.onFloor()) {
    player.y = 0;
    health -= 1;
    healthText.text = 'Health:' + health;
  };
}
