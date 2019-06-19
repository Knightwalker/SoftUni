function sum(arr) {
  let sum = 0;
  for (num of arr)
      sum += Number(num);
  return sum;
}

const assert = require("chai").assert;

describe('sum', function () {
  it("should return 3 for [1,2]", function(){
    let input = sum([1,2]);
    let expected = 3;
    assert.equal(input, expected);
  })

  it("should return -3 for [-1,-2]", function(){
    let input = sum([-1,-2]);
    let expected = -3;
    assert.equal(input, expected);
  })

  it("should return 0 for []", function(){
    let input = sum([]);
    let expected = 0;
    assert.equal(input, expected);
  })

  it('should return NaN when some of the elements are not numbers', function () {
    const inputArray = [-1, 'a', -3];
    const actual = sum(inputArray);
    assert.isNaN(actual, 'Sum function does not return NaN when some of the elements are not numbers.')
  });
});