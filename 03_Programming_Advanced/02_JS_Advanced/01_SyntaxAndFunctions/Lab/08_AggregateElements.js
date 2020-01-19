function main(args) {

  let sum = 0;
  let revSum = 0;
  let concatSum = "";

  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  for (let i = 0; i < args.length; i++) {
    revSum += 1/args[i];
  }

  for (let i = 0; i < args.length; i++) {
    concatSum += args[i];
  }

  console.log(sum);
  console.log(revSum);
  console.log(concatSum);

}