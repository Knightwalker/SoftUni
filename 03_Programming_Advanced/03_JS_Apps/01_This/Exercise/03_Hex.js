class Hex {
  constructor(number) {
    this.value = number;
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return "0x" + (this.value.toString(16).toUpperCase());
  }

  plus(secondNewObj) { // kude pishe obekt we?
    let newObj = new Hex(this.value + secondNewObj.valueOf());
    return newObj;
  }

  minus(secondNewObj) { // kude pishe obekt we?
    let newObj = new Hex(this.value - secondNewObj.valueOf());
    return newObj;
  }

  parse(kur) { 
    // ???
  }

}

// let FF = new Hex(255);
// let actual = FF.toString();
// let expected = "0xFF";
// console.log(actual);
// console.log(expected);
// console.log(FF.valueOf() + 1); 

let a = new Hex(10);
let b = new Hex(5);
let act = a.plus(b).toString();
let exp = "0xF";