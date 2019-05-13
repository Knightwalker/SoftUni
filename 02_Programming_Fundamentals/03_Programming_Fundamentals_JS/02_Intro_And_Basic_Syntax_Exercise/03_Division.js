function Division(arg1) {
  let number = Number(arg1);
  let divisible = false;
  let divisor = 0;

  if (number % 10 == 0) { divisible = true; divisor = 10; }
  else if (number % 7 == 0) { divisible = true; divisor = 7; }
  else if (number % 6 == 0) { divisible = true; divisor = 6; }
  else if (number % 3 == 0) { divisible = true; divisor = 3; }
  else if (number % 2 == 0) { divisible = true; divisor = 2; }

  if (divisible == true) {
    console.log("The number is divisible by " + divisor);
  } else {
    console.log("Not divisible");
  }

}

//Division(1643);