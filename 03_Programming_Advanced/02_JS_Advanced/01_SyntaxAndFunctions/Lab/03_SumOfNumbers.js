function main(n1, n2) {

  let res = 0;
  n1 = Number(n1);
  n2 = Number(n2);

  for (let i = n1; i <= n2; i++) {
    res += i;
  }

  console.log(res);

}