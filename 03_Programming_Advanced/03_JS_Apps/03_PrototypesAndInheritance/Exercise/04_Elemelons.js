class Melon {
  constructor(weight, melonSort) {
      if (new.target === Melon) {
          throw new TypeError("Abstract class cannot be instantiated directly");
      }

      this.weight = weight;
      this.melonSort = melonSort;
  }

}

class Watermelon extends Melon {
  constructor(weight, melonSort) {
    super(weight, melonSort);
    this._elementIndex = this.weight * this.melonSort.length;
  }

  get elementIndex() {
    return this._elementIndex;
  }

  toString() {
    let res = "";
    res += "Element: Water";
    res += `\nSort ${this.melonSort}`;
    res += `\nElement Index: ${this.elementIndex}`;
    return res;
  }
} 

class Firemelon extends Melon {
  constructor(weight, melonSort) {
    super(weight, melonSort);
    this._elementIndex = this.weight * this.melonSort.length;
  }

  get elementIndex() {
    return this._elementIndex;
  }

  toString() {
    let res = "";
    res += "Element: Fire";
    res += `\nSort ${this.melonSort}`;
    res += `\nElement Index: ${this.elementIndex}`;
    return res;
  }
} 

class Earthmelon extends Melon {
  constructor(weight, melonSort) {
    super(weight, melonSort);
    this._elementIndex = this.weight * this.melonSort.length;
  }

  get elementIndex() {
    return this._elementIndex;
  }

  toString() {
    let res = "";
    res += "Element: Earth";
    res += `\nSort ${this.melonSort}`;
    res += `\nElement Index: ${this.elementIndex}`;
    return res;
  }
}

class Airmelon extends Melon {
  constructor(weight, melonSort) {
    super(weight, melonSort);
    this._elementIndex = this.weight * this.melonSort.length;
  }

  get elementIndex() {
    return this._elementIndex;
  }

  toString() {
    let res = "";
    res += "Element: Air";
    res += `\nSort ${this.melonSort}`;
    res += `\nElement Index: ${this.elementIndex}`;
    return res;
  }
}

class Melolemonmelon extends Watermelon {
  constructor(weight, melonSort) {
    super(weight, melonSort);
    this._elementIndex = this.weight * this.melonSort.length;
    this.element = "Water";
  }

  get elementIndex() {
    return this._elementIndex;
  }

  morph() {
    if (this.element == "Water") {
      this.element = "Fire";
    } else if (this.element == "Fire") {
      this.element = "Earth";
    } else if (this.element == "Earth") {
      this.element = "Air";
    } else if (this.element == "Air") {
      this.element = "Water";
    }
  }

  toString() {
    let res = "";
    res += `Element: ${this.element}`;
    res += `\nSort ${this.melonSort}`;
    res += `\nElement Index: ${this.elementIndex}`;
    return res;
  }
}

//let test = new Melon(100, "Test");
//Throws error

let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100
