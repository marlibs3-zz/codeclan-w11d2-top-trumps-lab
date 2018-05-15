const assert = require ('assert');
const Game = require ('../game.js');
const Card = require ('../card.js');
const Player = require ('../player.js');

describe('game', function(){
  let game;
  let card1;
  let card2;
  let player1;
  let player2;

  beforeEach(function(){
    game = new Game();
    player1 = new Player('Marta');
    player2 = new Player('Lewis');
    card2 = new Card ('Scarlet Witch', 7, 10, 5);
    card1 = new Card('Superman', 6, 9, 7);
  });

  it('should be able to deal a card to a player', function(){
    game.deal(player1);
    const actual = player1.hand.length;
    assert.strictEqual(actual, 1);
  });
});
