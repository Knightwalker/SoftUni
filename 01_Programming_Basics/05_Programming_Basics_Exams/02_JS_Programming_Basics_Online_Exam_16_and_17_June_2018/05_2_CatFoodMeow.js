function CatWatch(args) {
  let n = Number(args[0]) 
  let msg = "";
  let counter = 0;
  let specialRow = (3 * (n - 2)) / 2;
  specialRow = Math.ceil(specialRow);

  for (i = 1; i <= n - 2; i++) {
    msg += " ".repeat(n) + "||" + "_".repeat(n-2) + "||" + "\n";
    counter++;
  }

  msg += " ".repeat(n-1) + "//" + " ".repeat(n) + "\\\\" + "\n";
  counter++;

  for (i = 1; i <= n-4; i++) {
    counter++;

    if (counter == specialRow) {
      msg += " ".repeat(n-2) + "||" + " ".repeat(n+2) + "||]" + "\n";
    } else {
      msg += " ".repeat(n-2) + "||" + " ".repeat(n+2) + "||" + "\n";
    }
    
  }

  msg += " ".repeat(n-1) + "\\\\" + " ".repeat(n) + "//" + "\n";

  for (i = 1; i <= n - 2; i++) {
    msg += " ".repeat(n) + "||" + "_".repeat(n-2) + "||" + "\n";
  }

console.log(msg);

}