function isSymmetric(arr) {
  if (!Array.isArray(arr))
      return false; // Non-arrays are non-symmetric
  let reversed = arr.slice(0).reverse(); // Clone and reverse
  let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
  return equal;
}

const assert = require("chai").assert;

describe("isSymmetric", function(){
  it("should return 'true' if the array is symmetric", function(){
    let input = isSymmetric([1,2,3,3,2,1]);
    assert.isTrue(input);
  });
  it("should return 'false' if the array is not symmetric", function(){
    let input = isSymmetric([1,2,3,4,2,1]);
    assert.isFalse(input);
  });
  it("should return 'true' if the array is symmetric with negative values", function(){
    let input = isSymmetric([-1,2,3,3,2,-1]);
    assert.isTrue(input);
  });
  it("should return 'false' if the array is not symmetric with negative values", function(){
    let input = isSymmetric([-1,2,3,3,2,1]);
    assert.isFalse(input);
  });

  it("should return 'false' if input isn't the correct type", function(){
    let input = isSymmetric([1,2,"1"]);
    assert.isFalse(input);
  });

  it('should return false if input is not an array', function () {
    const input = isSymmetric('aabbaa');
    const expected = false;
    assert.equal(input, expected);
  });

});