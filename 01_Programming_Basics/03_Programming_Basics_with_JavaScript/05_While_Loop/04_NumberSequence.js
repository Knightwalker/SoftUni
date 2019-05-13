function NumberSequence(args) {
  let i = 0;
  let nMin = 999;
  let nMax = -999;

  let n = parseInt(args[i]);
  let command = args[i];

  while(true) {

    if (command == "END") {break;}

    if (n > nMax) { nMax = n; }
    if (n < nMin) { nMin = n; }

    i++;
    n = parseFloat(args[i]);
    command = args[i];
  }

  console.log("Max number: " + nMax);
  console.log("Min number: " + nMin);
}