function Graduation(args) {
  let name = args[0];
  let i = 1;
  let n = parseFloat(args[i]);
  let nTotal = 0.0;
  let year = 1;

  while(year <= 12) {

    if (n >= 4.00) {
      nTotal += n;
      year += 1;
    } 

    i += 1;
    n = parseFloat(args[i]);
  }
  
  let average = nTotal / 12;
  console.log(name + " graduated. Average grade: " + average.toFixed(2));
}