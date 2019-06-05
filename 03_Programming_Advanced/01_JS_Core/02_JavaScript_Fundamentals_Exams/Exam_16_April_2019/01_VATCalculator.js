function VATCalc(priceWithVat, rate) {
  let theTaxableAmount = 100 * priceWithVat / (100 + rate);
  console.log(theTaxableAmount.toFixed(2));
}

//VATCalc(120.00, 20.00);
//VATCalc(220.00, 10.00);