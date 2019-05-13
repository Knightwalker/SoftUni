function InvalidNumber(args) {
  let n = parseFloat(args[0]);
  let msg = "invalid";

  if ((n >= 100 && n <= 200) || n == 0) {
    msg = "";
  }

  console.log(msg);

}