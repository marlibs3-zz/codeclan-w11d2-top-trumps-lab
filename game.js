const Player = require ('./player.js')

const Game = function(player1, player2, deck){
  this.player1 = player1;
  this.player2 = player2;
  this.deck = [];
}

Game.prototype.deal = function (player) {
  var pickedCard = this.deck.shift();
  player.hand.push(pickedCard);
};

module.exports = Game;
