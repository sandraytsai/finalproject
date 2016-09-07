createWeapon = function() {
  weapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
  weapon.bulletKillDistance = 800;
  weapon.fireRate = 250;
  weapon.fireLimit = 5;
  weapon.onFire.add(function(){
    bullets -= 1;
    bulletText.text = 'Bullets:' + bullets;
  });
}

weaponDirection = function() {
  if (player.body.velocity.x < 0) {
    weapon.trackSprite(player, 0, 10, true);
    weapon.bulletSpeed = -600;
  } else {
    weapon.trackSprite(player, 40, 10, true);
    weapon.bulletSpeed = 600;
  }
}

weaponFire = function() {
  if (fireButton.isDown) {
    weapon.fire();
  };
}
