let assert = require("chai").assert;

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

describe("RGBToHexColor", function() {

  it("should return correct hexColor", function() {
    let actual = rgbToHexColor(255, 158, 170);
    let expected = '#FF9EAA';
    assert.equal(actual, expected);

    actual = rgbToHexColor(0,0,0);
    expected = "#000000";
    assert.equal(actual, expected);

    actual = rgbToHexColor(255, 255, 255);
    expected = '#FFFFFF';
    assert.equal(actual, expected);
    
  });

  it("should return undefined if a value is not a number", function() {
    assert.isUndefined(rgbToHexColor(192, 168, "kur"));
    assert.isUndefined(rgbToHexColor(192, "kur", 1));
    assert.isUndefined(rgbToHexColor("kur", 168, 1));
  });
  
  it("should return undefined if a value is out of range", function() {
    assert.isUndefined(rgbToHexColor(192, 168, 4324234));
    assert.isUndefined(rgbToHexColor(192, 43243243, 1));
    assert.isUndefined(rgbToHexColor(256, 168, 1));
    assert.isUndefined(rgbToHexColor(-256, 168, 1));
  }); 

});