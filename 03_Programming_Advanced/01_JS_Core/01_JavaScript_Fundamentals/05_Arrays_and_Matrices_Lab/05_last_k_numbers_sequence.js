function FirstAndLastKNumbers(n, k) {

  let arr = [];
  arr.push(1);
  for (let i = 1; i < n; i++) {
    let sum = 0;
    let counter = k;

    //console.log(i);
    //console.log("index start " + Number(arr.length - 1));
    //console.log("index end " +  Number(arr.length - k));

    for (let j = Number(arr.length - 1); j >= Number(arr.length - k); j--) {
      //console.log("current index " + j);

      if (j >= 0) {
        sum += Number(arr[j]);
        counter--;
      } else {
        break;
      }
    }

    arr.push(sum);
    //console.log(arr);
  }

  console.log(arr.join(" "));

}

//FirstAndLastKNumbers(6, 3);s