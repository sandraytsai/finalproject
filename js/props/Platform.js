createPlatforms = function() {
  platforms = this.add.group();
  platforms.enableBody = true;
  // week1
  createPlatform(300, 500, '1');
  createPlatform(400, 450, '2');
  createPlatform(500, 400, '4');
  createPlatform(700, 400, '4');
  createPlatform(800, 0, '7');
  createPlatform(800, 300, '6');
  createPlatform(900, 0, '8');
  createPlatform(900, 400, '6');
  createPlatform(1000, 350, '5');
  createPlatform(1100, 0, '6');
  createPlatform(1100, 450, '5');
  createPlatform(1200, 0, '8');
  createPlatform(1300, 200, '7');
  createPlatform(1400, 0, '5');
  createPlatform(1500, 450, '5');
  // week2
  var cieling = platforms.create(1600, 0, '5');
  cieling.body.immovable = true;
  cieling.scale.setTo(8, 1);
  createPlatform(1800, 350, '3');
  createPlatform(2000, 250, '5');
  createPlatform(2250, 450, '5');
  createPlatform(2600, 450, '4');
  createPlatform(2950, 450, '4');
  // week3
  createPlatform(3200, 550, '3');
  createPlatform(3300, 500, '6');
  createPlatform(3400, 450, '3');
  createPlatform(3400, 500, '6');
  createPlatform(3500, 400, '8');
  createPlatform(3600, 350, '3');
  createPlatform(3600, 350, '3');
  createPlatform(3700, 400, '8');
  createPlatform(3700, 300, '6');
  createPlatform(3800, 300, '6');
  createPlatform(3800, 250, '3');
  createPlatform(3900, 300, '7');
  createPlatform(3900, 200, '6');
  createPlatform(4100, 300, '1');
  createPlatform(4250, 500, '2');
  createPlatform(4350, 350, '1');
  createPlatform(4450, 450, '5');
  createPlatform(4700, 350, '1');
  // week4
  // week5
  // week6
  // week7
  // week8
};

createPlatform = function(x, y, platformType) {
  var ledge = platforms.create(x, y, platformType);
  ledge.body.immovable = true; 
};


createGrounds = function() {
  // createGround(x, xscale)
  createGround(0, 1.75);
  createGround(400, 0.75);
  createGround(700, 6);
  createGround(2600, 3.5);
}

createGround = function(x, xscale) {
  var ground = platforms.create(x, 550, '5');
  ground.scale.setTo(xscale, 1);
  ground.body.immovable = true;
}