function Sequence(args) {
  let input = parseFloat(args[0]);
  let i = 0;
  let n = 1;

  while(n <= input) {
    console.log(n);
    i++;
    n = n * 2 + 1;
  }

}