const assert = require ('assert');
const Game = require ('../game.js');
const Card = require ('../card.js');
const Player = require ('../player.js');

describe('Player', function() {

  let game;
  let card;
  let player;

  beforeEach(function() {
    game = new Game();
    player = new Player('Marta');
    card = new Card('Superman', 6, 9, 7);
    game.addCard(card);
    game.deal(player);
  });

  it('should have a name', function() {
    const actual = player.name;
    assert.strictEqual(actual, 'Marta');
  });

  it('should start with a card in their hand', function() {
    const actual = player.hand.length;
    assert.strictEqual(actual, 1);
  });

  it('should output value of selected category', function() {
    const actual = player.playCard('strength');
    assert.strictEqual(actual, 9);
  })

});
