function main(args) {
  let res = "";

  for (let i = 0; i < args.length; i++) {
    
    if (i % 2 == 0) {
      res += args[i] + " ";
    }

  }

  console.log(res);

}

main(['20', '30', '40']);