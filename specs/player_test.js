const assert = require ('assert');
const Card = require ('../card.js');
const Player = require ('../player.js');

describe('Player', function() {

  let player;
  let card;

  beforeEach(function() {
    player = new Player('Marta');
    card = new Card('Superman', 6, 9, 7);
  });

  it('should have a name', function() {
    const actual = player.name;
    assert.strictEqual(actual, 'Marta');
  });

  it('should start with an empty hand', function() {
    const actual = player.hand.length;
    assert.strictEqual(actual, 0);
  });

  // it('should output value of selected category', function() {
  // 
  //   const actual = player.playCard(strength);
  // })

});
