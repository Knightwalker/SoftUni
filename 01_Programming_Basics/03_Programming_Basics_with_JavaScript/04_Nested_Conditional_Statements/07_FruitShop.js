function FruitShop(args) {
  let fruit = args[0].toLowerCase();
  let week = args[1].toLowerCase();
  let quantity = parseFloat(args[2]);

  let validWeek = false;
  let validFruit = false;

  let price = 0.0;

  if (week == "monday" || week == "tuesday" || week == "wednesday" || week == "thursday" || week == "friday") {
    if (fruit == "banana") { price = quantity * 2.50; }
    else if (fruit == "apple") { price = quantity * 1.20; }
    else if (fruit == "orange") { price = quantity * 0.85; }
    else if (fruit == "grapefruit") { price = quantity * 1.45; }
    else if (fruit == "kiwi") { price = quantity * 2.70; }
    else if (fruit == "pineapple") { price = quantity * 5.50; }
    else if (fruit == "grapes") { price = quantity * 3.85; }
  } else if (week == "saturday" || week == "sunday") {
    if (fruit == "banana") { price = quantity * 2.70; }
    else if (fruit == "apple") { price = quantity * 1.25; }
    else if (fruit == "orange") { price = quantity * 0.90; }
    else if (fruit == "grapefruit") { price = quantity * 1.60; }
    else if (fruit == "kiwi") { price = quantity * 3.00; }
    else if (fruit == "pineapple") { price = quantity * 5.60; }
    else if (fruit == "grapes") { price = quantity * 4.20; }
  }

  if (week == "monday" || week == "tuesday" || week == "wednesday" || week == "thursday" || week == "friday" || week == "saturday" || week == "sunday") {
    validWeek = true;
  } 

  if (fruit == "banana" || fruit == "apple" || fruit == "orange" || fruit == "grapefruit" || fruit == "kiwi" || fruit == "pineapple" || fruit == "grapes") {
    validFruit = true;
  } 
 
  if (validWeek == true && validFruit == true) {
    console.log(price.toFixed(2));
  } else {
    console.log("error");
  }

}