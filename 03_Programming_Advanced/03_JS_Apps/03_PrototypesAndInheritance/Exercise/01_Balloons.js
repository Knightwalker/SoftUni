function main() {

  class Balloon {
    constructor(color, gasWeight) {
      this.color = color;
      this.gasWeight = gasWeight;
    }
  }

  class PartyBalloon extends Balloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength) {
      super(color, gasWeight);
      this._ribbon = {
        color: ribbonColor,
        length: ribbonLength
      }
    }

    get ribbon() {
      return this._ribbon
    }

  }

  class BirthdayBalloon extends PartyBalloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
      super(color, gasWeight, ribbonColor, ribbonLength);
      this._text = text;
    }

    get text() {
      return this._text;
    }

  }

  // let b1 = new Balloon("Blue", 20.5);
  // let pb1 = new PartyBalloon("Blue", 20.5, "Red", 10.5);
  // let bb1 = new BirthdayBalloon("Blue", 20.5, "Red", 10.5, "Happy Birthday");

  return {
    Balloon: Balloon,
    PartyBalloon: PartyBalloon,
    BirthdayBalloon: BirthdayBalloon
  }

}