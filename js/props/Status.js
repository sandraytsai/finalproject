// createText = function(points) {
//   pointText = this.add.text(15, 75, 'Points: ' + points, { fontSize: '24px', fill: '#000' });
//   pointText.fixedToCamera = true;
// };

playerStatus = function(health, bullets) {
  var healthbarbg = this.add.image(15, 10, 'healthbarbg');
  healthbarbg.fixedToCamera = true;
  healthbar = this.add.image(60, 25, 'healthbar');
  healthbar.fixedToCamera = true;

  var ammobarbg = this.add.image(15, 50, 'ammobarbg');
  ammobarbg.fixedToCamera = true;
  ammobar = this.add.image(60, 65, 'ammobar');
  ammobar.fixedToCamera = true;
}

bulletStatus = function() {
  if (bullets < 0) {
    bullets = 0;
  };
  ammobar.scale.setTo(bullets/10, 1);
}

healthStatus = function() {
  if (health < 0 ) {
    health = 0;
  };
  healthbar.scale.setTo(health/1000, 1);
}