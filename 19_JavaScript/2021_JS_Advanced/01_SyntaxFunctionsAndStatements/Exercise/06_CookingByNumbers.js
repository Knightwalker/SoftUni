function solve(n, ...operationsArr) {

  let log = "";

  for (i = 0; i < operationsArr.length; i++) {
    if (operationsArr[i] == "chop") {
      n = n / 2;
    } else if (operationsArr[i] == "dice") {
      n = Math.sqrt(n);
    } else if (operationsArr[i] == "spice") {
      n = n += 1;
    } else if (operationsArr[i] == "bake") {
      n *= 3;
    } else if (operationsArr[i] == "fillet") {
      n -= n * 0.20;
    }
    log += `${n}\r\n`;
  }
  console.log(log.trim());

}

// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');