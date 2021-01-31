function solve(number1, number2, operator) {
  let result = 0;

  let allowedOperationsArr = ['+', '-', '*', '/', '%', '**'];
  if (allowedOperationsArr.includes(operator)) {
    result = eval(`${number1.toString()} ${operator} ${number2.toString()}`);
    console.log(result);
  } else {
    console.log("error");
  }

}

// solve(5, 6, "*");
// solve(3, 5.5, "*");