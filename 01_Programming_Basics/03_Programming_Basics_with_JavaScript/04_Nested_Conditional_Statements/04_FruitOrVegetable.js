function FruitOrVegetable(args) {
  let input = args[0].toLowerCase();
  let msg = "unknown";

  if (input == "banana" || input == "apple" || input == "kiwi" || input == "cherry" || input == "lemon" || input == "grapes") { 
    msg = "fruit"; 
  } else if (input == "tomato" || input == "cucumber" || input == "pepper" || input == "carrot") { 
    msg = "vegetable"; 
  }

  console.log(msg);

}