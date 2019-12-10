function BingoGenerator(args) {

  let n = Number(args[0]);
  let n1 = Math.floor((n / 1000) % 10);
  let n2 = Math.floor((n / 100) % 10);
  let n3 = Math.floor((n / 10) % 10);
  let n4 = Math.floor((n / 1) % 10);
  let startingN = 0;
  let res = 0;
  let d12 = "";
  let d15 = "";
  let c12 = 0;
  let c15 = 0;

  let num1 = n1 + "" + n3;
  let num2 = n2 + "" + n4;
  num1 = Number(num1);
  num2 = Number(num2);
  let cap = num1 + num2;
  startingN = num1 + "" + num2;
  startingN = Number(startingN);

  for (i = num1; i <= cap; i++) {
    for (i2 = num2; i2 <= cap; i2++) {
      res = i + "" + i2;
      res = Number(res);

      if (res >= startingN) {
        if (res % 12 == 0) {
          d12 += res + " ";
          c12++;
        } 
        if (res % 15 == 0) {
          d15 += res + " ";
          c15++;
        }
     
      }
      
    }
  }

  console.log("Dividing on 12: " + d12);
  console.log("Dividing on 15: " + d15);

  if (c12 > c15 || c12 < c15) {
    console.log("NO BINGO!")
  } else {
    console.log("!!!BINGO!!!");
  }
}