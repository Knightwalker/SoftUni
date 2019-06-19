function rgbToHexColor(red, green, blue) {
  if (!Number.isInteger(red) || (red < 0) || (red > 255))
  return undefined; // Red value is invalid
  if (!Number.isInteger(green) || (green < 0) || (green > 255))
  return undefined; // Green value is invalid
  if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
  return undefined; // Blue value is invalid
  return "#" +
  ("0" + red.toString(16).toUpperCase()).slice(-2) +
  ("0" + green.toString(16).toUpperCase()).slice(-2) +
  ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

const assert = require("chai").assert;

describe("rgbToHexColor", function(){
  it('should return correct hexColor', function () {
    let actual = rgbToHexColor(255, 158, 170);
    let expected = '#FF9EAA';
    assert.equal(actual, expected);

    actual = rgbToHexColor(0, 0, 0);
    expected = '#000000';
    assert.equal(actual, expected);

    actual = rgbToHexColor(255, 255, 255);
    expected = '#FFFFFF';
    assert.equal(actual, expected);
  });

  it('should return undefined if any of the input parameters are not a number', function () {
    const expected = undefined;

    let actual = rgbToHexColor('abc', 0, 0);
    assert.equal(actual, expected);

    actual = rgbToHexColor(0, 'abc', 0);
    assert.equal(actual, expected);

  });

  it('should return undefined if any of the input parameters are not in the expected range e.g 0-255', function(){
    let expected = undefined;

    // check out of range - color red
    actual = rgbToHexColor(-255, 158, 170);
    assert.equal(actual, expected);

    actual = rgbToHexColor(256, 158, 170);
    assert.equal(actual, expected);

    // check out of range - color green
    actual = rgbToHexColor(255, -158, 170);
    assert.equal(actual, expected);

    // check out of range - color blue
    actual = rgbToHexColor(255, 158, -170);
    assert.equal(actual, expected);
  });

});