const { assert } = require('chai');

const { helloWorld } = require ('../scripts/hello_world.js');

describe('helloWorld', function() {
  it('should return a string', function() {
    const helloResponse = helloWorld();
    assert.equal(typeof helloResponse, 'string');
  });
});

