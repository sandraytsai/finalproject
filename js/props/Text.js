createText = function(points) {
  pointText = this.add.text(15, 75, 'Points: ' + points, { fontSize: '24px', fill: '#000' });
  pointText.fixedToCamera = true;
};

playerStatus = function(health, bullets) {
  var playerhealth = this.add.sprite(5, 0, 'player');
  playerhealth.fixedToCamera = true;
  var playerbullet = this.add.image(5, 50, 'bullet');
  playerbullet.fixedToCamera = true;

  var redhealth = this.add.image(35, 10, 'redhealth');
  redhealth.fixedToCamera = true;
  greenhealth = this.add.image(35, 10, 'greenhealth');
  greenhealth.fixedToCamera = true;

  var redbullets = this.add.image(35, 50, 'redhealth');
  redbullets.fixedToCamera = true;
  greenbullets = this.add.image(35, 50, 'greenhealth');
  greenbullets.fixedToCamera = true;
}