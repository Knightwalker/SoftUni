function solve(numbersArr) {
  const sum = numbersArr.reduce((accumulator, value) => accumulator += value);
  const inverseSum = numbersArr.reduce((accumulator, value) => accumulator += 1/value, 0);
  const concatSum = numbersArr.reduce((accumulator, value) => accumulator += value.toString());

  console.log(sum);
  console.log(inverseSum);
  console.log(concatSum);
}

// solve([1, 2, 3]);
// solve([2, 4, 8, 16]);