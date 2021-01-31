function main(args) {

  let sumDiagonal = 0;
  let sumAntiDiagonal = 0;

  for (let i = 0; i < args.length; i++) {
    sumDiagonal += args[i][i];
  }

  for (let i = 0; i < args.length; i++) {
    sumAntiDiagonal += args[i][args.length - 1 - i];
  }

  console.log(sumDiagonal + " " + sumAntiDiagonal);

}

main([[20, 40], [10, 60]]);

// 20, 40
// 10, 60