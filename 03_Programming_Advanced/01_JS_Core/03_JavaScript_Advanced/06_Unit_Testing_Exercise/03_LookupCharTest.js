function lookupChar(string, index) {
  if (typeof(string) !== "string" || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }
  return string.charAt(index);
}

const assert = require("chai").assert;

describe("lookupChar", function(){
  it("should work with input 'abcd' of type string and '2' of type number", function(){
    let actual = lookupChar("abcd", 2);
    let expected = "c";
    assert.equal(actual, expected);
  });
  it("should return 'Incorrect Index' if index is out of range-negative", function(){
    let actual = lookupChar("abcd", -2);
    let expected = "Incorrect index";
    assert.equal(actual, expected);
  });
  it("should return 'Incorrect Index' if index is out of range-poisitive", function(){
    let actual = lookupChar("abcd", 10);
    let expected = "Incorrect index";
    assert.equal(actual, expected);
  });
  it("should return 'undefined' if index is not a number", function(){
    let actual = lookupChar("abcd", "2");
    let expected = undefined;
    assert.equal(actual, expected);
  });
  it("should return 'undefined' with a floating point number", function(){
    let actual = lookupChar("abcd", 2.2);
    let expected = undefined;
    assert.equal(actual, expected);
  });
  it("should return 'undefined' if input is not a string, check with number", function(){
    let actual = lookupChar(1234, 2);
    let expected = undefined;
    assert.equal(actual, expected);
  });
  it("should return 'undefined' if input is not a string, check with arr of string", function(){
    let actual = lookupChar(["abcd"], 2);
    let expected = undefined;
    assert.equal(actual, expected);
  });
  it("should return 'undefined' if input is not a string, check with obj of string", function(){
    let actual = lookupChar({"gosho": "pesho"}, 2);
    let expected = undefined;
    assert.equal(actual, expected);
  });
});