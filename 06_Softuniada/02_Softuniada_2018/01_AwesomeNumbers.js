function AwesomeNumbers(args) {

  let n = Number(args[0]);
  let special_n = Number(args[1]);
  let points = 0;

  if (n % 2 != 0) { points += 1;}
  if (n < 0) { points += 1; }
  if (n % special_n == 0) { points += 1;}

  if ( points == 1) { console.log("awesome"); }
  else if ( points == 2 ) { console.log("super awesome"); }
  else if ( points == 3) { console.log("super special awesome"); }
  else { console.log("boring"); }
  
}