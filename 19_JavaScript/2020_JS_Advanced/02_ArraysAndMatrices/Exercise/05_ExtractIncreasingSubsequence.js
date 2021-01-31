function main(args) {

  let resArr = [];
  let maxN = args[0];
  resArr.push(maxN);
  for (let i = 1; i < args.length; i++) {
    let currentN = args[i];
    if (currentN >= maxN) {
      maxN = currentN;
      resArr.push(currentN);
    }
  }

  resArr.forEach(element => {
    console.log(element);
  });

}

main([1, 
  3, 
  8, 
  4, 
  10, 
  12, 
  3, 
  2, 
  24
]);