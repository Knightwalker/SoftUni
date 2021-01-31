function main(args) {

  let res = Math.max(...args.flat(1));
  console.log(res);

}

main([[20, 50, 10], [8, 33, 145]]);