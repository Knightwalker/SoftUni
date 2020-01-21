function main(n, k) {

  let res = [];
  res.push(1);
  for (let i = 1; i < n; i++) {
    let begin = i - k;
    let end = i;
    if (begin < 0) { begin = 0 }

    let sum = 0;
    let numbers = res.slice(begin, end);
    for (let j = 0; j < numbers.length; j++) {
      sum += numbers[j];
    }

    res.push(sum);
  }

  console.log(res.join(" "));

}

main(6, 3);