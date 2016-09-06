createPlatforms = function() {
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