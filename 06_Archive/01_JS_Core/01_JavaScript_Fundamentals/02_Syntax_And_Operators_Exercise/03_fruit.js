function Fruit(arg1, arg2, arg3) {
  let fruit = arg1;
  let kilograms = Number(arg2) / 1000;
  let money = Number(arg3) * kilograms; 

  console.log("I need " + money.toFixed(2) + " leva to buy " + kilograms.toFixed(2) + " kilograms " + fruit + ".");

}

//Fruit('orange', 2500, 1.80);