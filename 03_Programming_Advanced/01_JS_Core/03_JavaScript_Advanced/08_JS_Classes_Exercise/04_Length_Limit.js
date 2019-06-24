class Stringer {
  constructor(innerString, innerLength) {
    this.innerString = innerString;
    this.innerLength = Number(innerLength);
  }

  increase(length) { 
    let temp = this.innerLength;
    if (temp + length < 0) {
      this.innerLength = 0;
    } else {
      this.innerLength += length;
    }
  }

  decrease(length) { 
    let temp = this.innerLength;
    if (temp - length < 0) {
      this.innerLength = 0;
    } else {
      this.innerLength -= length;
    }
  }

  toString() {
    let res = "";
    let len = this.innerString.length;

    if (len > this.innerLength) {
      res = this.innerString.slice(0, this.innerLength);
      return res + "...";
    } else if (this.innerLength == 0) {
      return "...";
    } else {
      return this.innerString;
    }
  }

}