function HappyCatParking(args) {

  let days = Number(args[0]);
  let hours = Number(args[1]);
  let price = 0;
  let totalPrice = 0;

  for (i = 1; i <= days; i++) {
    for (i2 = 1; i2 <= hours; i2++) {
      if ((i % 2 == 0) && (i2 % 2 != 0)) {
        price += 2.5;
      } else if ((i % 2 != 0) && (i2 % 2 == 0)) {
        price += 1.25;
      } else {
        price += 1;
      }
    }

    console.log("Day: " + i + " - " + price.toFixed(2) + " leva");
    totalPrice += price;
    price = 0;
  }

  console.log("Total: " + totalPrice.toFixed(2) + " leva")
 
}