function Rounding(arg1, arg2) {
  let number = parseFloat(arg1);
  let precision = Number(arg2);

  if (precision > 15) { precision = 15; }

  number = number.toFixed(precision);
  number = number.replace(/(\.[0-9]*[1-9])0+$|\.0*$/,'$1');

  console.log(number);
}

//Rounding(3.1415926535897932384626433832795,2);