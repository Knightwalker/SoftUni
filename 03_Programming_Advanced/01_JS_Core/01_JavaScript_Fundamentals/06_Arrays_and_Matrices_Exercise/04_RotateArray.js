function RotateArray(arr) {

  let n = arr[arr.length - 1];
  arr.pop();

  if (n > 1000) { n = n % 1000; }

  for (let i = 0; i < n; i++) {
    let temp = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = temp;
  }

  console.log(arr.join(" "));

}

//RotateArray(['1', '2', '3', '4', '2']);