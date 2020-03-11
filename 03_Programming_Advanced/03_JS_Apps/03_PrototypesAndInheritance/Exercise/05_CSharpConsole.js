class Console {

  static get placeholder() {
    return /{\d+}/g;
  }

  static writeLine() {
    let message = arguments[0];
    if (arguments.length === 1) {
      if (typeof (message) === 'object') {
        message = JSON.stringify(message);
        return message;
      }
      else if (typeof(message) === 'string') {
        return message;
      }
    }
    else {
      if (typeof (message) !== 'string') {
        throw new TypeError("No string format given!");
      }
      else {
        let tokens = message.match(this.placeholder).sort(function (a, b) {
          a = Number(a.substring(1, a.length - 1));
          b = Number(b.substring(1, b.length - 1));
          return a - b;
        });
        if (tokens.length !== (arguments.length - 1)) {
          throw new RangeError("Incorrect amount of parameters given!");
        }
        else {
          for (let i = 0; i < tokens.length; i++) {
            let number = Number(tokens[i].substring(1, tokens[i].length - 1));
            if (number !== i) {
              throw new RangeError("Incorrect placeholders given!");
            }
            else {
              message = message.replace(tokens[i], arguments[i + 1])
            }
          }
          return message;
        }
      }
    }
  }
};

let assert = require("chai").assert;

describe("Console", function() {
  it("Test 1 - works with String", function() {
    let actual = Console.writeLine("Hello World");
    let expected = "Hello World";
    assert.equal(actual, expected);
  });

  it("Test 2 - works with Object", function() {
    let actual = Console.writeLine({A: "Hello", B: "World"});
    let expected = JSON.stringify({A: "Hello", B: "World"});
    assert.equal(actual, expected);
  });

  it("Test 3 - works with Template", function() {
    let actual = Console.writeLine("The sum of {0} and {1} is {2}", 3, 4, 7);
    let expected = "The sum of 3 and 4 is 7";
    assert.equal(actual, expected);
  });

  it("Test TypeError - First argument is not string", function() {
    assert.throws(function(){
      Console.writeLine([], 1, 4, 7);
    }, "No string format given!");
  });

  it("Test RangeError - Number of parameters does not correspond to the number of placeholders in the template string", function() {
    assert.throws(function(){
      Console.writeLine("The sum of {0} and {1} is {2}", 1, 4);
    }, "Incorrect amount of parameters given!");
  });

  it("Test RangeError - Placeholders have indexes not withing the parameters range", function() {
    assert.throws(function(){
      Console.writeLine("The sum of {4} and {5} is {6}", 3, 4, 7);
    }, "Incorrect placeholders given!");
  });

  // Kude go pishe toq test case we?
  it("should recognize the placeholder numbers well", function () {
    expect(() => Console.writeLine("Not {10}", "valid")).to.throw(RangeError);
  });
  
});