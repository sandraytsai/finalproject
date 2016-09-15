  createWeapon = function() {
  weapon = this.add.weapon(10, 'bullet');
  weapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
  weapon.addBulletAnimation('left', [1], 1, true);  
  weapon.addBulletAnimation('right', [0], 1, true);
  weapon.bulletKillDistance = 800;
  weapon.fireRate = 250;
  weapon.fireLimit = 10;
  weapon.trackSprite(player, 1, 10, true);
  weapon.onFire.add(function(){
    bullets -= 1;
    shoot.play();
  });
}

weaponDirection = function() {
  if (facing == 'left') {
    weapon.trackSprite(player, 0, 27, true);
    weapon.bulletAnimation = 'left';
    weapon.bulletSpeed = -600;
  } else {
    weapon.trackSprite(player, 40, 27, true);
    weapon.bulletAnimation = 'right';
    weapon.bulletSpeed = 600;
  };
}

weaponFire = function() {
  if (fireButton.isDown) {
    weapon.fire();
      if (facing == 'left') {
      player.frame = 10;
    } else {
      player.frame = 1;
    }
  };
}
