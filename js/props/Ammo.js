createAmmos = function() {
  ammos = this.add.group();
  ammos.enableBody = true;
  // w1
  createAmmo(1000, 0, 'ammo');
  createAmmo(1200, 0, 'ammo');
  createAmmo(1400, 0, 'super-ammo');
  createAmmo(11100, 300, 'ammo');
  createAmmo(11150, 300, 'super-ammo');
};

createAmmo = function(x, y, type) {
  var ammo = ammos.create(x, y, type);
  ammo.body.gravity.y = 300; 
  ammo.body.bounce.y = 0.3;
  if (type == 'ammo') {
    ammo.amount = 3;
  } else if (type == 'super-ammo') {
    ammo.amount = 5;
  };
};