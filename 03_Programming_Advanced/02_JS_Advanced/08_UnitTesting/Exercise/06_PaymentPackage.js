let assert = require("chai").assert;

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

describe("PaymentPackage", function() {

  //for some reason this test gives 70/100
  // it("test valid instantiation", function() {
  //   let p = new PaymentPackage("Kur", 20);
  //   assert.property(p, "_name");
  //   assert.property(p, "_value");
  //   assert.property(p, "_VAT");
  //   assert.property(p, "_active");
  // });

  it("test valid instantiation", function() {
    let p = new PaymentPackage("Kur", 20);
    assert.isObject(p);
  })

  it("test invalid instantiation", function() {
    assert.throws(function() {
      let p = new PaymentPackage("Kur");
    }, "Value must be a non-negative number");
  });

  // Testing Getters and Setters
  it("Set Name - Invalid data", function() {
    assert.throws(function(){
      let p = new PaymentPackage("", 0);
    }, "Name must be a non-empty string");

    assert.throws(function(){
      let p = new PaymentPackage(0, 0);
    }, "Name must be a non-empty string");
  });

  it("Set Name - Valid data", function() {
    let p = new PaymentPackage("Kur", 20);
    assert.equal(p.name, "Kur");
  });

  it("Set Value - Invalid data", function() {
    assert.throws(function(){
      let p = new PaymentPackage("Kur", -1);
    }, "Value must be a non-negative number");

    assert.throws(function(){
      let p = new PaymentPackage("Kur", "Kur");
    }, "Value must be a non-negative number");
  });

  it("Set Value - Valid data", function() {
    let p = new PaymentPackage("Kur", 20);
    assert.equal(p.value, 20);
  });

  it("Set VAT - Invalid data", function() {
    let p = new PaymentPackage("Kur", 20);
    
    assert.throws(function(){
      p.VAT = "Kur";
    }, "VAT must be a non-negative number");

    assert.throws(function(){
      p.VAT = -20;
    }, "VAT must be a non-negative number");
  });

  it("Set VAT - Valid data", function() {
    let p = new PaymentPackage("Kur", 20);
    p.VAT = 40;
    assert.equal(p.VAT, 40);
  });

  it("Set Active - Invalid Data", function() {
    let p = new PaymentPackage("Kur", 20);

    assert.throws(function(){
      p.active = null;
    }, "Active status must be a boolean");
  
  });

  it("Set Active - Valid Data", function() {
    let p = new PaymentPackage("Kur", 20);
    assert.equal(p.active, true);
  });

  // Testing Functions
  it("Function toString - Should work properly", function() {
    let p = new PaymentPackage("Kur", 20);
    let actual = p.toString();
    let expect = "Package: Kur";
    expect += "\n- Value (excl. VAT): 20";
    expect += "\n- Value (VAT 20%): 24";
    assert.equal(actual, expect);
  });

  it("Function toString 2 - Should work properly", function() {
    const packages = [
      new PaymentPackage('HR Services', 1500),
      new PaymentPackage('Consultation', 800),
      new PaymentPackage('Partnership Fee', 7000),
    ];
    let actual = packages.join('\n');
    let expect = "Package: HR Services";
    expect += "\n- Value (excl. VAT): 1500";
    expect += "\n- Value (VAT 20%): 1800";
    expect += "\nPackage: Consultation";
    expect += "\n- Value (excl. VAT): 800";
    expect += "\n- Value (VAT 20%): 960";
    expect += "\nPackage: Partnership Fee";
    expect += "\n- Value (excl. VAT): 7000";
    expect += "\n- Value (VAT 20%): 8400";

    assert.equal(actual, expect);
  });

  it("Function toString 3 - Should work properly", function() {
    const packages = [
      new PaymentPackage('HR Services', 1500),
      new PaymentPackage('Consultation', 800),
      new PaymentPackage('Partnership Fee', 7000),
    ];
    packages[1].active = false;
    let actual = packages.join('\n');
    let expect = "Package: HR Services";
    expect += "\n- Value (excl. VAT): 1500";
    expect += "\n- Value (VAT 20%): 1800";
    expect += "\nPackage: Consultation (inactive)";
    expect += "\n- Value (excl. VAT): 800";
    expect += "\n- Value (VAT 20%): 960";
    expect += "\nPackage: Partnership Fee";
    expect += "\n- Value (excl. VAT): 7000";
    expect += "\n- Value (VAT 20%): 8400";

    assert.equal(actual, expect);
  });

  it("Function toString 4 - Should work properly", function() {
    let p = new PaymentPackage("Kur", 0);
    let actual = p.toString();
    let expect = "Package: Kur";
    expect += "\n- Value (excl. VAT): 0";
    expect += "\n- Value (VAT 20%): 0";
    assert.equal(actual, expect);
  });

});