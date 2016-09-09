createWeapon = function() {
  weapon = this.add.weapon(10, 'bullet');
  weapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
  weapon.bulletKillDistance = 800;
  weapon.fireRate = 250;
  weapon.fireLimit = 5;
  weapon.onFire.add(function(){
    bullets -= 1;
    shoot.play();
  });
}

weaponDirection = function() {
  if (facing == 'left') {
    weapon.trackSprite(player, 0, 10, true);
    weapon.bulletSpeed = -600;
  } else {
    weapon.trackSprite(player, 40, 10, true);
    weapon.bulletSpeed = 600;
  };
}

weaponFire = function() {
  if (fireButton.isDown) {
    weapon.fire();
  };
}
