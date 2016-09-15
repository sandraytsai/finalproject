createFirstaids= function() {
  firstaids = this.add.group();
  firstaids.enableBody = true;
  createFirstaid(5520, 150);
  createFirstaid(7900, 350);
  createFirstaid(10840, 350);

};

createFirstaid= function(x,y) {
  var firstaid = firstaids.create(x, y, 'healthbox');
  firstaid.body.gravity.y = 300;
  firstaid.body.bounce.y = 0.3;
};