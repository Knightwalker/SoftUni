function solve(numbers) {

  let arrNumbers = numbers.toString().split("").map(n => n = Number(n));
  let sum = arrNumbers.reduce((acc, val) => acc += val);
  
  let bSameNumbers = true;
  arrNumbers.reduce((prev, curr) => {
    if (prev != curr) { bSameNumbers = false; }
    return prev = curr;
  });

  console.log(bSameNumbers);
  console.log(sum);

}

// solve(2222222);
// solve(1234);