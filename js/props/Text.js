createText = function(points, health, bullets) {
    pointText = this.add.text(15, 15, 'Points: ' + points, { fontSize: '32px', fill: '#000' });
    pointText.fixedToCamera = true;

    healthText = this.add.text(15, 40, 'Health: ' + health, { fontSize: '32px', fill: '#000' });
    healthText.fixedToCamera = true;

    bulletText = this.add.text(15, 65, 'Bullets: ' + bullets, { fontSize: '32px', fill: '#000' });
    bulletText.fixedToCamera = true;
}