function CalorieObject(args) {
  let product = "";
  let price = 0;
  let res = "";

  for(i = 0; i < args.length; i++) {

    if (i == 0) {
      res += "{ ";
    }

    break;

  }

  for(i = 0; i < args.length; i++) {

    if (i % 2 == 0) {
      product = args[i];
      res += product + ": ";
    } else {
      price = args[i];

      if (i < args.length - 1) {
        res += price + ", ";
      } else {
        res += price + " }";
      }

    }
 
  }
  
  console.log(res);

}

//CalorieObject(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);