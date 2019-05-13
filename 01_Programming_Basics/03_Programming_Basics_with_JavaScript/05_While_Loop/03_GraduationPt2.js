function GraduationPt2(args) {
  let name = args[0];
  let i = 1;
  let n = parseFloat(args[i]);
  let nTotal = 0.0;
  let year = 1;

  let excluded = false;
  let excludedTimes = 0;

  while(year <= 12) {

    if (n >= 4.00) {
      nTotal += n;
      year += 1;
    } else {
      excludedTimes++;

      if (excludedTimes == 2) {excluded = true; break;}
    }

    i += 1;
    n = parseFloat(args[i]);
  }

  if (excluded == true) {
    console.log(name + " has been excluded at " + year + " grade");
  } 
  else {
    let average = nTotal / 12;
    console.log(name + " graduated. Average grade: " + average.toFixed(2));
  }
}