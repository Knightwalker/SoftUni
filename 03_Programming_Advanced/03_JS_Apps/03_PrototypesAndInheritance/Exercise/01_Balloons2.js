function result() {

  function Balloon(color, gasWeight) {
    this.color = color;
    this.gasWeight = gasWeight;
  }

  function PartyBalloon(color, gasWeight, ribbonColor, ribbonLength) {
    Balloon.call(this, color, gasWeight);
    this._ribbon = {
      color: ribbonColor,
      length: ribbonLength
    }

    Object.defineProperty(PartyBalloon.prototype, 'ribbon', {
      get: function() {
        return this._ribbon;
      }
    });
  }
  PartyBalloon.prototype = Object.create(Balloon.prototype); //?

  function BirthdayBalloon(color, gasWeight, ribbonColor, ribbonLength, text) {
    PartyBalloon.call(this, color, gasWeight, ribbonColor, ribbonLength);
    this._text = text;
  
    Object.defineProperty(BirthdayBalloon.prototype, 'text', {
      get: function() {
        return this._text;
      }
    });
  }
  BirthdayBalloon.prototype = Object.create(PartyBalloon.prototype); //?

  // let b1 = new Balloon("Blue", 20.5);
  // let pb1 = new PartyBalloon("Blue", 20.5, "Red", 10.5);
  // let bb1 = new BirthdayBalloon("Blue", 20.5, "Red", 10.5, "Happy Birthday");

  return {
    Balloon: Balloon,
    PartyBalloon: PartyBalloon,
    BirthdayBalloon: BirthdayBalloon
  }

}