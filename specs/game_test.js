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
    card1 = new Card('Superman', 6, 9, 7);
    card2 = new Card ('Scarlet Witch', 7, 10, 5);
    game.addCard(card1);
    game.addCard(card2);
  });

  it ('should be able to add one card to the deck', function(){
    game.addCard(card1);
    const actual = game.deck.length;
    assert.strictEqual(actual, 3);
  })

  it('should be able to deal a card to a player', function(){
    game.deal(player1);
    const actual = player1.hand.length;
    assert.strictEqual(actual, 1);
  });
});
