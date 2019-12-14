function SumOfNumbersNtoM(arg1, arg2) {
  let n1 = Number(arg1);
  let n2 = Number(arg2);
  let res = 0;

  for (let i = n1; i <= n2; i++) {
    res += i;
  }

  console.log(res);

}

//SumOfNumbersNtoM("1", "5");