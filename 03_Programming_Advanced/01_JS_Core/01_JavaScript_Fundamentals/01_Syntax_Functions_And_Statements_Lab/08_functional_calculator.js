function FunctionalCalculator(n1, n2, operator) {
  res = 0;
  
  if (operator == "+") {
    res = n1 + n2;
  } else if (operator == "-") {
    res = n1 - n2;
  } else if (operator == "*") {
    res = n1 * n2;
  } else if (operator == "/") {
    res = n1 / n2;
  }

  console.log(res);
}