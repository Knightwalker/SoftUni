function SmallestTwoNumbers(arr) {
  let res = [];
  let n1 = Math.min(...arr);
  arr.splice((arr.indexOf(n1)), 1);
  let n2 = Math.min(...arr);
  res.push(n1);
  res.push(n2);
  console.log(res.join(" "));
}

//SmallestTwoNumbers([30, 15, 50, 5]);