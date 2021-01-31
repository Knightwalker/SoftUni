function main(args) {

  let newArr = [];
  for (let i = 0; i < args.length; i++) {
    let number = args[i];
    if (number >= 0) {
      newArr.push(number);
    } else {
      newArr.unshift(number);
    }

  }

  console.log(newArr);

}