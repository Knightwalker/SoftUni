class Stringer {
  constructor(innerString , innerLength) {
    this.innerString  = innerString;
    this.innerLength = innerLength;
  }

  increase(n) {
    this.innerLength += n;
  }

  decrease(n) {
    this.innerLength -= n;
    if (this.innerLength < 0) { this.innerLength = 0; }
  }

  toString() {
    debugger;
    let res = this.innerString.slice(0, this.innerLength);
    if (this.innerLength < this.innerString.length) {
      res += "...";
    }
    return res;
  }

}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test