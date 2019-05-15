function ConverterToCoins(arg1, arg2) {

  arg2.sort(NumberDes);
  //console.log(arg2);

  let arr = [];
  let index = 0;
  while(true) {
    if (arg1 <= 0) { 
      break;
    }

    let n = 0;
    if (arg1 - arg2[index] >= 0) {
      arg1 -= arg2[index];
      n = arg2[index];
      arr.push(n);
    } else {
      index++;
    }

  }

  // Output
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      res += arr[i] + ", ";
    } else {
      res += arr[i];
    }
  }
  console.log(res);

  // Sort Numbers in Descending Order
  function NumberDes(a,b) {
   return b-a;
  }
  
}

//ConverterToCoins(46, [10, 25, 5, 1, 2]);
//ConverterToCoins(123, [5, 50, 2, 1, 10]);