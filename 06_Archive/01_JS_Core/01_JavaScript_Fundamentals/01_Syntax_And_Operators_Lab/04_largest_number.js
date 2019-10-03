function LargestNumber(arg1, arg2, arg3) {
  let n1 = Number(arg1);
  let n2 = Number(arg2);
  let n3 = Number(arg3);
  let res = Math.max(n1, n2, n3);

  console.log("The largest number is " + res + ".");

}

LargestNumber(5, -3, 16)