function PrintEveryNthElement(arr) {
  let n = Number(arr[arr.length - 1]);
  arr.pop();
  
  for (let i = 0; i < arr.length; i+=n) {
    console.log(arr[i]);
  }

}

//PrintEveryNthElement(['5', '20', '31', '4', '20', '2']);