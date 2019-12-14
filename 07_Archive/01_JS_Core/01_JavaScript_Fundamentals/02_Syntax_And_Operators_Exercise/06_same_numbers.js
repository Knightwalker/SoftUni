function SameNumber(arg1) {
  let n = String(arg1);
  let res = 0;
  let valid = true;

  for (i = 0; i < n.length; i++) {
    res += Number(n[i]);
  }

  for (i = 0; i < n.length - 1; i++) {
    if (n[i] == n[i + 1]) {
      // valid = true;
    } else {
      valid = false;
      break;
    }
  }

  console.log(valid);  
  console.log(res);

}

//SameNumber(2222222);
//SameNumber(1234);