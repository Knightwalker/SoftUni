function CatExpenses(args) {

  let bed = Number(args[0]);
  let toiletMonthly = Number(args[1]);

  let foodMonthly = toiletMonthly + (toiletMonthly * 0.25);
  let toysMonthly = foodMonthly / 2;
  let doctorMonthly = toysMonthly + (toysMonthly * 0.10);

  let expensesMonthly = toiletMonthly + foodMonthly + toysMonthly + doctorMonthly;
  let extraMonthly = expensesMonthly * 0.05;

  let expensesYearly = bed + (12 * expensesMonthly) + (12 * extraMonthly);

  console.log(expensesYearly.toFixed(2) + " lv." ); 
}