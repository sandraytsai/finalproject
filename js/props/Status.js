createText = function(points) {
  pointText = this.add.text(15, 75, 'Points: ' + points, { fontSize: '24px', fill: '#000' });
  pointText.fixedToCamera = true;
};

playerStatus = function(health, bullets) {
  var playerhealth = this.add.sprite(5, 0, 'player');
  playerhealth.scale.setTo(0.5, 0.5)
  playerhealth.fixedToCamera = true;
  var playerbullet = this.add.image(5, 55, 'bullet');
  playerbullet.fixedToCamera = true;
  playerbullet.scale.setTo(0.75, 0.75);

  var redhealth = this.add.image(35, 10, 'redhealth');
  redhealth.fixedToCamera = true;
  greenhealth = this.add.image(35, 10, 'greenhealth');
  greenhealth.fixedToCamera = true;

  var redbullets = this.add.image(35, 50, 'redhealth');
  redbullets.fixedToCamera = true;
  greenbullets = this.add.image(35, 50, 'greenhealth');
  greenbullets.fixedToCamera = true;
}

bulletStatus = function() {
  if (bullets < 0) {
    bullets = 0;
  };
  greenbullets.scale.setTo(bullets/5, 1);
}

healthStatus = function() {
  if (health < 0 ) {
    health = 0;
  };
  greenhealth.scale.setTo(health/1000, 1);
}