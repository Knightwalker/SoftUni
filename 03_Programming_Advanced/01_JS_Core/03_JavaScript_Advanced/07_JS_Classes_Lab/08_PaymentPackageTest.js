class PaymentPackage {
  constructor(name, value) {
      this.name = name;
      this.value = value;
      this.VAT = 20;      // Default value
      this.active = true; // Default value
  }

  get name() {
      return this._name;
  }

  set name(newValue) {
      if (typeof newValue !== 'string') {
          throw new Error('Name must be a non-empty string');
      }

      if (newValue.length === 0) {
          throw new Error('Name must be a non-empty string');
      }

      this._name = newValue;
  }

  get value() {
      return this._value;
  }

  set value(newValue) {
      if (typeof newValue !== 'number') {
          throw new Error('Value must be a non-negative number');
      }

      if (newValue < 0) {
          throw new Error('Value must be a non-negative number');
      }

      this._value = newValue;
  }

  get VAT() {
      return this._VAT;
  }

  set VAT(newValue) {
      if (typeof newValue !== 'number') {
          throw new Error('VAT must be a non-negative number');
      }

      if (newValue < 0) {
          throw new Error('VAT must be a non-negative number');
      }

      this._VAT = newValue;
  }

  get active() {
      return this._active;
  }

  set active(newValue) {
      if (typeof newValue !== 'boolean') {
          throw new Error('Active status must be a boolean');
      }

      this._active = newValue;
  }

  toString() {
      const output = [
          `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
          `- Value (excl. VAT): ${this.value}`,
          `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
      ];

      return output.join('\n');
  }
}

const assert = require("chai").assert;

describe('PaymentPackage', function () {
    let paymentPackage;
    let name = 'Consultation';
    let value = 100;

    beforeEach(function () {
        paymentPackage = new PaymentPackage(name, value);
    });

    describe('constructor', function () {
        it('should initialize with the correct name', function () {
            const expected = 'Consultation';
            const actual = paymentPackage.name;

            assert.equal(actual, expected);
        });

        it('should initialize with the correct value', function () {
            const expected = 100;
            const actual = paymentPackage.value;

            assert.equal(actual, expected);
        });

        it('default value of VAT property should be 20', function () {
            const expected = 20;
            const actual = paymentPackage.VAT;

            assert.equal(actual, expected);
        });

        it('default value of active property should be true', function () {
            assert.isTrue(paymentPackage.active);
        });
    });

    describe("name", function(){
        it("get name - should properly display name", function(){
            let expected = "Consultation";
            let actual = paymentPackage.name;

            assert.equal(actual, expected);
        }); 

        it("set name - should properly change the name", function(){
            paymentPackage.name = "SoftUniConf";

            let expected = "SoftUniConf";
            let actual = paymentPackage.name;

            assert.equal(actual, expected);
        });

        it('setter should throw error when the value is not a string', function () {
            assert.throw(() => {
                paymentPackage.name = 5;
            }, 'Name must be a non-empty string');
        });

        it('setter should throw error when the value is empty string', function () {
            assert.throw(() => {
                paymentPackage.name = '';
            }, 'Name must be a non-empty string');
        });
    })

    describe("value", function() {
        it("get value - should properly display value", function(){
            let expected = 100;
            let actual = paymentPackage.value;

            assert.equal(actual, expected);
        });

        it("set value - should properly set new value", function(){
            paymentPackage.value = 50;

            let expected = 50;
            let actual = paymentPackage.value;

            assert.equal(actual, expected);
        });

        it('should work correctly when the value is equal to 0', function () {
            paymentPackage.value = 0;

            const expected = 0;
            const actual = paymentPackage.value;

            assert.equal(actual, expected);
        });

        it("setter should throw error when the value is not a non-negative number", function(){
            assert.throw(() => {
                paymentPackage.value = "abc";
            }, "Value must be a non-negative number");
        });

        it("setter should throw error when the value is not a non-negative number", function(){
            assert.throw(() => {
                paymentPackage.value = -50;
            }, "Value must be a non-negative number");
        });
    });

    describe("VAT", function() {
        it("get vat - should properly display VAT", function(){
            let expected = 20;
            let actual = paymentPackage.VAT;

            assert.equal(actual, expected);
        });

        it("set value - should properly set new VAT", function(){
            paymentPackage.VAT = 50;

            let expected = 50;
            let actual = paymentPackage.VAT;

            assert.equal(actual, expected);
        });

        it("setter should throw error when the value is not a non-negative number", function(){
            assert.throw(() => {
                paymentPackage.VAT = "abc";
            }, "VAT must be a non-negative number");
        });

        it("setter should throw error when the value is not a non-negative number", function(){
            assert.throw(() => {
                paymentPackage.VAT = -50;
            }, "VAT must be a non-negative number");
        });
    });

    describe("active", function(){
        it("get active - should properly set new active bool status", function(){
            let expected = true;
            let actual = paymentPackage.active;    

            assert.equal(actual, expected);
        });

        it("set active - should properly set new active bool status", function(){
            paymentPackage.active = false;    
            let expected = false;
            let actual = paymentPackage.active;    

            assert.equal(actual, expected);
        });

        it("setter should throw error when the input is not a boolean", function(){
            assert.throw(() => {
                paymentPackage.active = "false";
            }, "Active status must be a boolean");
        });
    });

    describe('toString tests', function () {
        it('should return correct string when the status is active', function () {
            const expected = 'Package: Consultation\n' +
                '- Value (excl. VAT): 100\n' +
                '- Value (VAT 20%): 120';

            const actual = paymentPackage.toString();

            assert.equal(actual, expected);
        });

        it('should return correct string when the status is inactive', function () {
            paymentPackage.active = false;

            const expected = 'Package: Consultation (inactive)\n' +
                '- Value (excl. VAT): 100\n' +
                '- Value (VAT 20%): 120';

            const actual = paymentPackage.toString();

            assert.equal(actual, expected);
        });
    });

}); 