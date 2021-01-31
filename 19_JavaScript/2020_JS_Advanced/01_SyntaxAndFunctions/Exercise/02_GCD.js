function main(x, y) {

  while(y) {
    let t = y;
    y = x % y;
    x = t;
  }

  console.log(x);

}

main(15, 5);