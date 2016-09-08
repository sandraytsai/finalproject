createText = function(points, health, bullets) {
    pointText = this.add.text(15, 40, 'Points: ' + points, { fontSize: '32px', fill: '#000' });
    pointText.fixedToCamera = true;

    bulletText = this.add.text(15, 65, 'Bullets: ' + bullets, { fontSize: '32px', fill: '#000' });
    bulletText.fixedToCamera = true;
}