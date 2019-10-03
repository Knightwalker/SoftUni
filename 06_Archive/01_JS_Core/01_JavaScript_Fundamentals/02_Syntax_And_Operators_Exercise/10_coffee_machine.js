function CoffeeMachine(args) {
let totalCoins = 0;  

  for (i = 0; i < args.length; i++) {
  let inputCoins = 0;  
  let drinkName = "";
  let priceDrink = 0;
  let priceMilk = 0;
  let priceSugar = 0; 
  let change = 0;

  let arr = args[i].split(", ");
  //console.log(arr);

    for (j = 0; j < arr.length; j++) {
      // part 1, input coins.
      if (j == 0) {
        inputCoins = Number(arr[j]);
        //console.log(inputCoins);

      // part 2, type drink.
      } else if (j == 1) {
        drinkName = arr[j];
        if (drinkName == "tea") {
          priceDrink = 0.80;
        } else if (drinkName == "coffee") {
          j++;
          //drinkName += ", " + arr[j];
          
          if (arr[j] == "caffeine") {
            priceDrink = 0.80;
          } else if (arr[j] == "decaf") {
            priceDrink = 0.90;
          }
        }

        //console.log(drinkName);
        //console.log(priceDrink);

      // part 3, milk and sugar.
      } else {
        if (arr[j] == "milk") {
          priceMilk = priceDrink * 0.1;
          priceMilk = Number(priceMilk.toFixed(1));
          j++;
          
          if (arr[j] == "0") {
            priceSugar = 0;
          } else {
            priceSugar = 0.10;
          }

        } else {

          if (arr[j] == "0") {
            priceSugar = 0;
          } else {
            priceSugar = 0.10;
          }

        }
        
      }

    }
    //console.log(priceMilk);
    //console.log(priceSugar);

    priceDrink += priceMilk + priceSugar;
    if (inputCoins >= priceDrink) {
      console.log(`You ordered ${drinkName}. Price: ${priceDrink.toFixed(2)}$ Change: ${(inputCoins - priceDrink).toFixed(2)}$`);
      totalCoins += priceDrink;
    } else {
      console.log(`Not enough money for ${drinkName}. Need ${(priceDrink - inputCoins).toFixed(2)}$ more.`);
    }

  }

  console.log("Income Report: " + totalCoins.toFixed(2) + "$");

}

//CoffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);