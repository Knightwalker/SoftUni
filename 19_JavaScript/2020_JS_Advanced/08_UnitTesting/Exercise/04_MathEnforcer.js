describe("mathEnforcer", function(){
  // checking addFive
    it ("if input is of type 'string' it should return 'undefined'", function(){
      let actual = mathEnforcer.addFive("5");
      let result = undefined;
      assert.equal(actual, result);
    });
    it ("if input is '5' of type 'number' it should work properly", function(){
      let actual = mathEnforcer.addFive(5);
      let result = 10;
      assert.equal(actual, result);
    });
    it ("if input is '-5' of type 'number' it should work properly", function(){
      let actual = mathEnforcer.addFive(-5);
      let result = 0;
      assert.equal(actual, result);
    });
    it ("if input is '5.5' of type 'number' it should work properly", function(){
      let actual = mathEnforcer.addFive(5.5);
      let result = 10.5;
      assert.closeTo(actual, result, 0.1);
    });

    // checking subtractTen
    it ("if input is of type 'string' it should return 'undefined'", function(){
      let actual = mathEnforcer.subtractTen("5");
      let result = undefined;
      assert.equal(actual, result);
    });
    it ("if input is '5' of type 'number' it should work properly", function(){
      let actual = mathEnforcer.subtractTen(5);
      let result = -5;
      assert.equal(actual, result);
    });
    it ("if input is '-5' of type 'number' it should work properly", function(){
      let actual = mathEnforcer.subtractTen(-5);
      let result = -15;
      assert.equal(actual, result);
    });
    it ("if input is '5.5' of type 'number' it should work properly", function(){
      let actual = mathEnforcer.subtractTen(5.5);
      let result = -4.5;
      assert.closeTo(actual, result, 0.1);
    });

    // checking subtractTen
    it ("if any of the params are not of type 'number' it should return 'undefined'", function(){
      let actual = mathEnforcer.sum("5", 5);
      let result = undefined;
      assert.equal(actual, result);
    });

    it ("if any of the params are not of type 'number' it should return 'undefined'", function(){
      let actual = mathEnforcer.sum(5, "5");
      let result = undefined;
      assert.equal(actual, result);
    });

    it ("if both params are of type 'number' it should work properly", function(){
      let actual = mathEnforcer.sum(5, 5);
      let result = 10;
      assert.equal(actual, result);
    });

    it ("if both params are of type 'number' it should work properly", function(){
      let actual = mathEnforcer.sum(5.5, 5);
      let result = 11.5;
      assert.equal(actual, result);
    });

    it ("if both params are of type 'number' it should work properly", function(){
      let firstNumber = 0.1;
      let secondNumber = 0.2;
      let expected = firstNumber + secondNumber;
      const actual = mathEnforcer.sum(firstNumber, secondNumber);
      assert.closeTo(actual, expected, 0.01);
    });

    it ("if both params are of type 'number' it should work properly", function(){
      let actual = mathEnforcer.sum(-0.1, -0.2);
      let result = 1;
      assert.closeTo(actual, result, 0.1);
    });

  });