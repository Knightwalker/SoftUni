function main(args) {

  let counter = 0;
  //debugger;
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {

      if (j < args[i].length - 1) {
        if (args[i][j] == args[i][j + 1]) { counter++; }
        //console.log(args[i][j] + "[" + i + ", " + j + "] = " + args[i][j + 1] + "[" + i + ", " + (j + 1) + "] = " + counter);
      }
      
      if (i < args.length - 1) {
        if (args[i][j] == args[i + 1][j]) { counter++; }
        //console.log(args[i][j] + "[" + i + ", " + j + "] = " + args[i + 1][j] + "[" + (i + 1) + ", " + j + "] = " + counter);
      }
    }
  }

  console.log(counter);

}

// main([
//   ['2', '3', '4', '7', '0'],
//   ['4', '0', '5', '3', '4'],
//   ['2', '3', '5', '4', '2'],
//   ['9', '8', '7', '5', '4']
// ]);

main([
  ['2', '2', '5', '7', '4'],
  ['4', '0', '5', '3', '4'],
  ['2', '5', '5', '4', '2']
]);