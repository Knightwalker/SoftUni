function NumberInRange(args) {
  let i = 0;
  let n = parseFloat(args[i]);

  while(true) {

    if (n > 0 && n <= 100) { 
      console.log("The number is: " + n)
      break; 
    }
    
    console.log("Invalid Number");
    i++;
    n = parseFloat(args[i]);
 
  }
}