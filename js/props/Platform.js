createPlatforms = function() {
  platforms = this.add.group();
  platforms.enableBody = true;
  // week1
  createPlatform(300, 500, '1');
  createPlatform(400, 450, '2');
  createPlatform(500, 400, '4');
  createPlatform(650, 400, '4');
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
  createPlatform(4900, 350, '5');
  createPlatform(5100, 350, '5');
  createPlatform(5000, 400, '8');
  createPlatform(5400, 0, '7');
  createPlatform(5500, 300, '6');
  createPlatform(5600, 300, '6');
  createPlatform(5700, 350, '3');
  createPlatform(5850, 450, '1');
  createPlatform(5900, 250, '2');
  createPlatform(5950, 400, '4');
  createPlatform(6100, 400, '8');
  createPlatform(6100, 200, '6');
  createPlatform(6200, 250, '5');
  // week5
  createGround(6400, 250, 3.5);
  createGround(6400, 300, 3.5);
  createPlatform(6400, 500, '6');
  createPlatform(6600, 500, '6');
  createPlatform(6800, 500, '6');
  createPlatform(7000, 500, '6');
  createPlatform(7300, 500, '6');
  createPlatform(7500, 500, '6');
  createPlatform(7700, 500, '6');
  createPlatform(7900, 500, '6');
  createGround(7200, 100, 4);
  createGround(7200, 150, 4);
  createGround(7200, 400, 4);
  createGround(7200, 450, 4);
  createPlatform(6400, 0, '6');
  createPlatform(6600, 0, '6');
  createPlatform(6800, 0, '6');
  createPlatform(7000, 0, '6');
  createPlatform(7300, 0, '6');
  createPlatform(7500, 0, '6');
  createPlatform(7700, 0, '6');
  createPlatform(7900, 0, '6');
  // week6
  createPlatform(8050, 50, '2');
  createPlatform(8100, 10, '2');
  createPlatform(8100, 450, '2');
  createPlatform(8150, 500, '2');
  createPlatform(8250, 150, '1');
  createPlatform(8250, 400, '2');
  createPlatform(8300, 350, '2');
  createPlatform(8400, 250, '1');
  createPlatform(8450, 250, '2');
  createPlatform(8550, 0, '2');
  createPlatform(8600, 400, '4');
  createPlatform(8670, 250, '2');
  createPlatform(8800, 0, '2');
  createPlatform(8850, 0, '2');
  createPlatform(8850, 350, '1');
  createPlatform(8900, 400, '2');
  createPlatform(9050, 450, '2');
  createPlatform(9100, 500, '2');
  createPlatform(9200, 400, '1');
  createPlatform(9250, 300, '2');
  createPlatform(9350, 200, '2');
  createPlatform(9450, 350, '1');
  createPlatform(9500, 400, '2');
  // week7
  createPlatform(9650, 300, '1');
  createPlatform(9750, 200, '1');
  createPlatform(9850, 350, '1');
  createPlatform(10000, 250, '1');
  createPlatform(10000, 450, '1');
  createPlatform(10050, 450, '3');
  createPlatform(10100, 150, '1');
  createPlatform(10150, 100, '1');
  createPlatform(10200, 550, '1');
  createPlatform(10300, 550, '3');
  createPlatform(10300, 200, '1');
  createGround(10500, 0, 4.75);
  createGround(10600, 50, 3.5);
  createGround(10700, 100, 2.75);
  createGround(10800, 150, 2);
  createGround(10800, 400, 3);
  createGround(10700, 450, 3.25);
  createGround(10600, 500, 3.5);
  createGround(10500, 550, 3.75);
  // week8
  createGround(12200, 0, 3);
  createGround(12200, 50, 3);
  createGround(12300, 100, 2.5);
  createGround(12400, 150, 2);
  createGround(12500, 150, 1.5);
  createGround(12500, 200, 1.5);
  createPlatform(11350, 350, '3');
  createGround(11600, 550, 6);
  createGround(12200, 500, 3);
  createGround(12300, 450, 2.5);
  createGround(12400, 400, 2.5);
  createGround(12500, 350, 1.5);
};

createPlatform = function(x, y, platformType) {
  var ledge = platforms.create(x, y, platformType);
  ledge.body.immovable = true; 
};


createGrounds = function() {
  // createGround(x, xscale)
  // xscale = length/200
  createGround(0, 550, 1.75);
  createGround(400, 550, 0.25);
  createGround(500, 550, 0.25);
  createGround(650, 550, 5.75);
  createGround(2600, 550, 3.5);
  createGround(5400, 550, 3);
}

createGround = function(x, y, xscale) {
  var ground = platforms.create(x, y, '5');
  ground.scale.setTo(xscale, 1);
  ground.body.immovable = true;
}