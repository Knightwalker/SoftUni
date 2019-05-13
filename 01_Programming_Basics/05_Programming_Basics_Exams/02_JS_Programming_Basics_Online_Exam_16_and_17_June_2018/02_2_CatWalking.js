function CatWalking(args) {

  let walkInMinutes = Number(args[0]);
  let walksInNumbers = Number(args[1]);
  let calories = Number(args[2]);

  let totalWalkInMinutes = walkInMinutes * walksInNumbers;
  let totalBurnedCalories = totalWalkInMinutes * 5;
  let caloriesHalved = calories / 2;

  if (totalBurnedCalories >= caloriesHalved) {
    console.log("Yes, the walk for your cat is enough. Burned calories per day: " + totalBurnedCalories + ".")
  } else {
    console.log("No, the walk for your cat is not enough. Burned calories per day: " + totalBurnedCalories + ".")
  }
  
}