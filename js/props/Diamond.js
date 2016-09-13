createDiamonds = function() {
  diamonds = this.add.group();
  diamonds.enableBody = true;
  // w1
  createDiamond(1000, 0);
  createDiamond(1200, 0);
  createDiamond(1400, 0);
  createDiamond(11100, 300);
  createDiamond(11150, 300);
};

createDiamond = function(x,y) {
  var diamond = diamonds.create(x, y, 'diamond');
  diamond.body.gravity.y = 300; 
  diamond.body.bounce.y = 0.3;
};