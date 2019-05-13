function MaxNumber(args) {
  let arrayLength = parseFloat(args[0]);
  let maxNum = -99999;
  let n = 0;

  for (let i = 1; i <= arrayLength; i++) {
    n = parseFloat(args[i]);
    
    if (maxNum < n) {
      maxNum = n;
    }
   
  }
  
  console.log(maxNum);
  
}