const Card = require ('./card.js');

const Player = function(name, hand){
  this.name = name;
  this.hand = [];
}

Player.prototype.playCard = function (category) {
  var pickedCategory = category;
  this.hand.card.pickedCategory;
};

module.exports = Player;
