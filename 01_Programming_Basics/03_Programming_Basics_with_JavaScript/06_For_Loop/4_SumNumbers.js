function SumNumbers(args) {
  let arrayLength = parseFloat(args[0]);
  
  let sum = 0;
  let n = 0;

  for (let i = 1; i <= arrayLength; i++) {
    n = parseFloat(args[i]);
    sum += n;    
  }
  
  console.log(sum);
  
}