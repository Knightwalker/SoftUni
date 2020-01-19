function main(typeOfFood, weightGrams, priceKg) {
  
  let weightKg = weightGrams / 1000;
  let totalPriceKg = weightKg * priceKg;
  console.log(`I need $${totalPriceKg.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${typeOfFood}.`)

}

main('orange', 2500, 1.80);