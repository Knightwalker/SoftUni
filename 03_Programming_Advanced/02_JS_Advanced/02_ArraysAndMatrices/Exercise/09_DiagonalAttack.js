function main(args) { 

  let matrix = [];
  for (let i = 0; i < args.length; i++) {
    let arr = args[i].split(" ").map(x => Number(x));
    matrix.push(arr);
  }

  let sumDiagonal = 0;
  let sumAntiDiagonal = 0;

  for (let i = 0; i < matrix.length; i++) {
    sumDiagonal += matrix[i][i];
  }

  for (let i = 0; i < matrix.length; i++) {
    sumAntiDiagonal += matrix[i][matrix.length - 1 - i];
  }

  if (sumDiagonal == sumAntiDiagonal) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if ((i != j) && (matrix.length - 1 - i != j)) {
          matrix[i][j] = sumDiagonal;
        }
      }
    }
  }

  let result = "";
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      result += matrix[i][j] + " ";
    }
    result += "\n";
  }

  //console.log(sumDiagonal + " " + sumAntiDiagonal);
  console.log(result);

}

main([
  '5 3 12 3 1',
  '11 4 23 2 5',
  '101 12 3 21 10',
  '1 4 5 2 2',
  '5 22 33 11 1'
]);