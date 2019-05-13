function EvenOrOdd(args) {
  let n = parseFloat(args[0]);
  let msg = '';

  if (n % 2 == 0) {
    msg = 'even';
  } else {
    msg = 'odd';
  }

  console.log(msg);
}