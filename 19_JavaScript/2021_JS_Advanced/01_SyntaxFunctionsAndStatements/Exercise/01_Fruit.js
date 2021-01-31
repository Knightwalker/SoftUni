function solve(typeOfFruit, weightInGrams, pricePerKilogram) {
  let weight = (weightInGrams / 1000);
  let money = (weight * pricePerKilogram);
  console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${typeOfFruit}.`);
}

// solve('orange', 2500, 1.80);
// solve('apple', 1563, 2.35);