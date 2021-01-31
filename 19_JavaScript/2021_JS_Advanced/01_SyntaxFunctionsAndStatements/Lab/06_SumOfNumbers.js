function solve(n, m) {
  let from = Number(n);
  let to = Number(m);
  let sum = 0;

  for (let i = from; i <= to; i++) {
    sum += i;
  }

  console.log(sum);

}

// solve('1', '5');
// solve('-8', '20');