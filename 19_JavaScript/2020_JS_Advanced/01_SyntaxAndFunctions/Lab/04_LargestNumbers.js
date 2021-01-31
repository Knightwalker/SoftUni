function main(n1, n2, n3) {

  let arr = [n1, n2, n3];
  arr.sort(function(a, b) {
    return b - a;
  });
  console.log(`The largest number is ${arr[0]}.`);

}

main(5, -3, 16);