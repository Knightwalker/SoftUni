function multiplication_table(n) {

  let res = 0;

  for (let i = 1; i <= 10; i++) {
    res = n * i;
    console.log(n + " X " + i + " = " + res);
  }

}

//multiplication_table(5);