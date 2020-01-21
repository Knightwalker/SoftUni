function main(args) {

  args.sort(function(a, b){
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
  });

  let res = args.slice(0, 2);
  console.log(res.join(" "));

}

main([30, 15, 50, 5]);