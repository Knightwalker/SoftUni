function createCalculator() {
  let value = 0;
  return {
  add: function(num) { value += Number(num); },
  subtract: function(num) { value -= Number(num); },
  get: function() { return value; }
  }
}

const assert = require("chai").assert;

describe("createCalculator", function(){
  it("checking if the fn creates an Obj containing add, subtract, get as properties", function(){
    // check if the function creates an object
    const result = createCalculator();
    assert.isObject(result);

    // check if all the properties are included in the object
    const properties = ["add", "subtract", "get"];
    let checkProperties = true;
    for (let i = 0; i < properties.length; i++) {
      let currentProperty = properties[i];
      if (!result[currentProperty]) {
        checkProperties = false;
        break;
      }
    }

    assert.isTrue(checkProperties);

  });

  it('should have closure with internal sum 0', function () {
    const calculator = createCalculator();
    const expected = 0;
    const actual = calculator.get();
    assert.equal(actual, expected);
  });

  it('should not be able to modify the internal sum', function () {
    const calculator = createCalculator();
    calculator.value -= 1;
    const expected = 0;
    const actual = calculator.get();
    assert.equal(actual, expected);
  });

  it('function add should take parsable argument', function () {
    const calculator = createCalculator();
    assert.doesNotThrow(() => calculator.add(5));
    assert.doesNotThrow(() => calculator.add('5'));
  });

  it("checking if fn property 'add' functions properly", function(){
    const calculator = createCalculator();
    calculator.add(2);
    calculator.add(3);
    const actual = calculator.get();
    assert.equal(actual, 5);
  });

  it("checking if fn property 'subtract' functions properly", function(){
    const calculator = createCalculator();
    calculator.subtract(2);
    calculator.subtract(3);
    const actual = calculator.get();
    assert.equal(actual, -5);
  });

  it("checking if fn property 'add' and 'subtract' functions properly", function(){
    const calculator = createCalculator();
    calculator.add(5.3);
    calculator.subtract(1.1);
    const actual = calculator.get();
    assert.closeTo(actual, 4.2, 0.1);
  });

  it("checking if fn.add input is not correct", function(){
    const calculator = createCalculator();
    calculator.add("hello");
    const res = calculator.get();
    assert.isNaN(res);
  });

  it("checking if fn.subtract input is not correct", function(){
    const calculator = createCalculator();
    calculator.subtract("hello");
    const res = calculator.get();
    assert.isNaN(res);
  });

  it('should do proper calculations with given numbers and numbers as strings', function () {
    const calculator = createCalculator();
    calculator.add(4);
    calculator.add('3');
    calculator.subtract(3);
    calculator.subtract('2');

    const expected = 2;
    const actual = calculator.get();

    assert.equal(actual, expected);
  });

});