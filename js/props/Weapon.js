createWeapon = function() {
  weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  weapon.bulletSpeed = 600;
  weapon.fireRate = 100;
  weapon.fireLimit = 5;
  weapon.trackSprite(player, 40, 10, true);
}