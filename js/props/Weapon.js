createWeapon = function() {
  weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  weapon.fireRate = 100;
  weapon.fireLimit = 5;
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