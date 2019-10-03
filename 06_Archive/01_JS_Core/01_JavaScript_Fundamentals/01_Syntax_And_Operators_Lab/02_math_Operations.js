function MathOperations(arg1, arg2, arg3) {
  let n1 = Number(arg1);
  let n2 = Number(arg2);
  let operation = arg3;
  let res = undefined;

  if (operation == "+") {
    res = n1 + n2;
  } else if (operation == "-") {
    res = n1 - n2;
  } else if (operation == "*") {
    res = n1 * n2;
  } else if (operation == "/") {
    res = n1 / n2;
  } else if (operation == "%") {
    res = n1 % n2;
  } else if (operation == "**") {
    res = n1 ** n2;
  }

  console.log(res);

}

//MathOperations(5, 6, "+");