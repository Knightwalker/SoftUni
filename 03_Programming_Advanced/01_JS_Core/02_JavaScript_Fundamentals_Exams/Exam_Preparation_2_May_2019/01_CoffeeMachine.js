function CoffeeMachine(inputArr) {
  let totalMoney = 0;

  for(let i = 0; i < inputArr.length; i++) {
    let arr = inputArr[i].split(", ");
    let coins = Number(arr[0]);
    let drink = arr[1];
    let sugar = arr[arr.length - 1];
    let price = 0;

    let coffeeType = "no";
    if (drink == "coffee") {
      coffeeType = arr[2];
      if (coffeeType == "caffeine") {
        price += 0.80;
      } else if (coffeeType == "decaf") {
        price += 0.90;
      }
    } else if (drink == "tea") {
      price += 0.80;
    }
    
    if (arr.includes("milk")) {
      price += 0.10;
    }

    if (Number(sugar) > 0) {
      price += 0.10;
    }

    // output

    if (coins >= price) {
      console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${(coins - price).toFixed(2)}$`);
      totalMoney += price;
    } else {
      console.log(`Not enough money for ${drink}. Need ${(price - coins).toFixed(2)}$ more.`);
    }

  }

  console.log(`Income Report: ${totalMoney.toFixed(2)}$`)

}

//CoffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);