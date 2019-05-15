function AgregateElements(arr) {
  let sum = 0;
  let sumInverse = 0;
  let concat = "";

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    sumInverse += 1 / arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    concat += arr[i];
  }

  console.log(sum);
  console.log(sumInverse);
  console.log(concat);
}