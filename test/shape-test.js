const test = require("../lib/testing.js");
const shapes = require("../src/shapes/square.js");

const square = shapes.square;

const testSquare = function() {
  test.assertEquality("****\n****\n****\n****\n", square(4), 'should give square of given length');
}

testSquare();
