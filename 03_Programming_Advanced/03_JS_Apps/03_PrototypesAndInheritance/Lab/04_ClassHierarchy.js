function main() {

  function Figure(unit = "cm") {
    this.units = unit;

  }
  Figure.prototype.changeUnits = function(newUnit) {
    this.units = newUnit;
  }

  //---//

  function Circle(radius) {
    Figure.call(this);
    this.radius = radius;
    Object.defineProperty(this, "area", {
      get: function area() {
        let result = Math.PI * this.radius * this.radius;
        if (this.units == "m") {
          return result / 100; 
        } else if (this.units == "mm") {
          return result * 100;
        } else {
          return result;
        }
      }
    });

  }
  Circle.prototype = Object.create(Figure.prototype);
  Circle.prototype.toString = function() { 

    let newRadius = 0;

    if (this.units == "m") {
      newRadius = this.radius / 10;
    } else if (this.units == "mm") {
      newRadius = this.radius * 10;
    } else {
      newRadius = this.radius;
    }

    return `Figures units: ${this.units} Area: ${this.area} - radius: ${newRadius}`; 
  } 

  //---//

  function Rectangle(width, height, unit) {
    Figure.call(this, unit);
    this.width = width;
    this.height = height;
    Object.defineProperty(this, "area", {
      get: function area() {
          let result = this.width * this.height;
          if (this.units == "m") {
            return result / 100; 
          } else if (this.units == "mm") {
            return result * 100;
          } else {
            return result;
          }
      }
    });

  }
  Rectangle.prototype = Object.create(Figure.prototype);
  Rectangle.prototype.toString = function() { 

    let newWidht = 0;
    let newHeight = 0;

    if (this.units == "m") {
      newWidht = this.width / 10;
      newHeight = this.height / 10;
    } else if (this.units == "mm") {
      newWidht = this.width * 10;
      newHeight = this.height * 10;
    } else {
      newWidht = this.width;
      newHeight = this.height;
    }

    return `Figures units: ${this.units} Area: ${this.area} - width: ${newWidht}, height: ${newHeight}`; 

  } 

  return {
    Figure,
    Circle,
    Rectangle
  }

}

//---//

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50