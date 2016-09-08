createPlatforms = function() {
  platforms = this.add.group();
  platforms.enableBody = true;
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
  createPlatform(1500, 400, '3');
};

createPlatform = function(x, y, platformType) {
  var ledge = platforms.create(x, y, platformType);
  ledge.body.immovable = true; 
};

createGround = function() {
  var ground = platforms.create(0, this.world.height - 50, '5');
  //  Scale it to fit the width of the game (the original sprite is 400x32 in size)-> 12800/400 = 32
  ground.scale.setTo(1.75, 1);
  ground.body.immovable = true;

  var ground = platforms.create(400, this.world.height - 50, '5');
  //  Scale it to fit the width of the game (the original sprite is 400x32 in size)-> 12800/400 = 32
  ground.scale.setTo(60.5, 1);
  ground.body.immovable = true;
}