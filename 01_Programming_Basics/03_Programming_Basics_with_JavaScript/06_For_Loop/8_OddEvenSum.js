function OddEvenSum(args) {
  let n = Number(args[0]);
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 1; i <= n; i++) {

    if (i % 2 == 0) {
      console.log(args[i]);
      evenSum += Number(args[i]);
    } else {
      oddSum += Number(args[i]);
    }
  }

  if (oddSum == evenSum) {
    console.log("Yes Sum = " + oddSum);
  } else {
    console.log("No Diff = " + Math.abs(oddSum - evenSum));
  }

}