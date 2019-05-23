function FirstAndLastKNumbers(arg) {
  let k = arg[0];
  let arr = [];
  for (let i = 1; i < arg.length; i++) {
    arr.push(arg[i]);
  }
  let firstKNumbers = [];
  let lastKNumbers = [];

  if (k <= arr.length) {
    for (let i = 0; i < k; i++) {
      firstKNumbers.push(arr[i]);
    }
    for (let i = arr.length - 1; i >= arr.length - k; i--) {
      lastKNumbers.push(arr[i]);
    }
    lastKNumbers.reverse();
  } 

  console.log(firstKNumbers.join(" "));
  console.log(lastKNumbers.join(" "));

}

//FirstAndLastKNumbers([2, 7, 8, 9]);
//FirstAndLastKNumbers([3, 6, 7, 8, 9]);