function main(args) {

  let res = [];
  for (let i = 0; i < args.length; i++) {
    if (i % 2 != 0) {
      res.push(args[i]);
    }
  }

  res = res.map(n => n * 2);
  res = res.reverse();
  console.log(res.join(" "));

}

main([3, 0, 10, 4, 7, 3]);