function main(arg1, arg2, arg3) {
  let sum = arg1.length + arg2.length + arg3.length;
  console.log(sum);
  console.log(Math.floor(sum / 3));
}

main('chocolate', 'ice cream', 'cake');