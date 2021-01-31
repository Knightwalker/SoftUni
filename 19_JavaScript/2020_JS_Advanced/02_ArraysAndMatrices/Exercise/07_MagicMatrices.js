function main(args) {

  let magical = true;
  let len = args.length;

  // Get 1 row for comparison
  let sum = 0;
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < len; j++) {
      sum += args[i][j];
    }
  }

  debugger;
  // sumRows
  for (let i = 0; i < len; i++) {
    let currentSum = 0;
    for (let j = 0; j < len; j++) {
      currentSum += args[i][j];
    }
    if (currentSum != sum) {
      magical = false;
      exit = true;
      break;
    }
  }

  // sumCols
  for (let i = 0; i < len; i++) {
    let currentSum = 0;
    for (let j = 0; j < len; j++) {
      currentSum += args[j][i];
    }
    if (currentSum != sum) {
      magical = false;
      exit = true;
      break;
    }
  }

  if (magical) {
    console.log("true");
  } else {
    console.log("false");
  }

}

// main([
//   [4, 5, 6],
//   [6, 5, 4],
//   [5, 5, 5]
// ]);

main([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1]
]);