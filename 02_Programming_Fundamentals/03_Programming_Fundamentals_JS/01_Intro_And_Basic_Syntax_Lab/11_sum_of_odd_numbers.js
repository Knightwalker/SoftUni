function sum_of_odd_numbers(n) {

  let sum = 0;

  for (let i = 1; i <= n * 2; i++) {
    if (i % 2 != 0) {
      sum += i;
      console.log(i);
    }
  }

  console.log("Sum: " + sum);

}

//sum_of_odd_numbers(5);