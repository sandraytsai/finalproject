createAmmos = function() {
  ammos = this.add.group();
  ammos.enableBody = true;
  // w1
  createAmmo(750, 500, 'ammo');
  createAmmo(950, 350, 'ammo');
  // w2
  createAmmo(2300, 400, 'ammo');
  createAmmo(3050, 500, 'ammo');
  // w3
  createAmmo(4365, 300, 'ammo');
  // w4
  createAmmo(5100, 300, 'ammo');
  createAmmo(5450, 500, 'ammo');
  createAmmo(6130, 100, 'super-ammo');
  // w5
  createAmmo(6240, 350, 'super-ammo');
  // w6
  createAmmo(8260, 100, 'super-ammo');
  // w7
  createAmmo(9670, 250, 'super-ammo');
  createAmmo(11050, 350, 'super-ammo');
  // w8
  createAmmo(11300, 350, 'super-ammo');
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