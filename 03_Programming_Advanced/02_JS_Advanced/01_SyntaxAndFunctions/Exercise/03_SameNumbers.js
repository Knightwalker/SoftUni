function main(arg1) {

  let input = arg1.toString();
  let sum = 0;
  let same = true;

  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] != input[i + 1]) {
      same = false;
      break;
    }
  }

  for (let i = 0; i < input.length; i++) {
    sum += Number(input[i]);
  }

  console.log(same);
  console.log(sum);

}

main(2222222);