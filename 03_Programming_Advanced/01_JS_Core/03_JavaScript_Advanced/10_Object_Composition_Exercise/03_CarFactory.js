function solve(carObj) {
  let newCarObj = {
    model: carObj.model,
    engine: {},
    carriage: {},
    wheels: []
  };

  if (carObj.power > 0 && carObj.power <= 90) {
    newCarObj.engine = {
      power: 90,
      volume: 1800
    }
  } else if (carObj.power > 90 && carObj.power <= 120) {
    newCarObj.engine = {
      power: 120, 
      volume: 2400
    }
  } else if (carObj.power > 120 && carObj.power <= 200) {
    newCarObj.engine = {
      power: 200, 
      volume: 3500
    }
  }

  if (carObj.carriage == "hatchback") {
    newCarObj.carriage = {
      type: "hatchback",
      color: carObj.color
    }
  } else if (carObj.carriage == "coupe") {
    newCarObj.carriage = {
      type: "coupe",
      color: carObj.color
    }
  }

  let n = carObj.wheelsize;
  let nearestOddNumber = 2 * Math.ceil(n/2) - 1;
  for (let i = 0; i < 4; i++) { newCarObj.wheels.push(nearestOddNumber); }
  
  return newCarObj;

}

// solve({ model: 'VW Golf II',
//   power: 90,
//   color: 'blue', 
//   carriage: 'hatchback',
//   wheelsize: 14 });