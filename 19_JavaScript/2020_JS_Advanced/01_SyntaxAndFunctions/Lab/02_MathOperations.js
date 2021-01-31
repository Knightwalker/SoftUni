function main(num1, num2, str) {

  let res = 0;

  if (str == "+") {
    res = num1 + num2;
  } else if (str == "-") {
    res = num1 - num2;
  } else if (str == "*") {
    res = num1 * num2;
  } else if (str == "/") {
    res = num1 / num2;
  } else if (str == "%") {
    res = num1 % num2;
  } else if (str == "**") {
    res = num1 ** num2;
  }

  console.log(res);

}