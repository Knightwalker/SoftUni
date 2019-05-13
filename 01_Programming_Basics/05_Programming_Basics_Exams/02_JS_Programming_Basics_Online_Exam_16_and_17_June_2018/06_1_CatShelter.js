function CatShelter(args) {

let index = 0;
let food = Number(args[index]);
food *= 1000;
index += 1;
let consumedFood = 0;

  while (args[index] != "Adopted") {
    consumedFood = Number(args[index]);
    food -= consumedFood;
    index += 1;
  }

  if (food >= 0) {
    console.log("Food is enough! Leftovers: " + food + " grams.")
  } else {
    console.log("Food is not enough. You need " + Math.abs(food) + " grams more.")
  }

}

