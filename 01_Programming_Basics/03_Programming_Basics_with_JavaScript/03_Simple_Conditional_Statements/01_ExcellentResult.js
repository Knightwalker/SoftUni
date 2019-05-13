function ExcellentResult(args) {
  let n = parseFloat(args[0]);
  let msg = '';
  
  if (n >= 5.50) {
    msg = 'Excellent!';
  } else {
    msg = '';
  }

  console.log(msg);
}