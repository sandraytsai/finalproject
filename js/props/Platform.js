createPlatforms = function() {
  platforms = this.add.group();
  platforms.enableBody = true;
  createPlatform(0, 300 , '50x300');
  createPlatform(400, 400, 'ground');
  createPlatform(700, 300, 'ground');
  createPlatform(1000, 200, 'ground');
  createPlatform(1200, 400, 'ground');
  createPlatform(1500, 300, 'ground');
};

createPlatform = function(x, y, platformType) {
  var ledge = platforms.create(x, y, platformType);
  ledge.body.immovable = true; 
};

createGround = function() {
  var ground = platforms.create(0, this.world.height - 62, 'ground');
  //  Scale it to fit the width of the game (the original sprite is 400x32 in size)-> 12800/400 = 32
  ground.scale.setTo(32, 2);
  ground.body.immovable = true;
}