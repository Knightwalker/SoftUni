function isOddOrEven(string) {
  if (typeof(string) !== "string") {
  return undefined;
  }
  if (string.length % 2 === 0) {
  return "even";
  }
  return "odd";
}

const assert = require("chai").assert;

describe("isOddOrEven", function(){
  it("check if it returns 'even' when input is '12' of type 'string'", function(){
    let actual = isOddOrEven('12');
    assert.equal(actual, "even");
  });
  it("check if it returns 'odd' when input is '123' of type 'string'", function(){
    let actual = isOddOrEven('123');
    assert.equal(actual, "odd");
  });
  it("check if it returns 'undefined' when input is 'number'", function(){
    let actual = isOddOrEven(123);
    assert.equal(actual, undefined);
  });
  it("check if it returns 'undefined' when input is 'array' with number", function(){
    let actual = isOddOrEven([123]);
    assert.equal(actual, undefined);
  });
  it("check if it returns 'undefined' when input is 'array' with string", function(){
    let actual = isOddOrEven(["123"]);
    assert.equal(actual, undefined);
  });
  it("check if it returns 'undefined' when input is 'object'", function(){
    let actual = isOddOrEven({'gosho': 123});
    assert.equal(actual, undefined);
  });
});

