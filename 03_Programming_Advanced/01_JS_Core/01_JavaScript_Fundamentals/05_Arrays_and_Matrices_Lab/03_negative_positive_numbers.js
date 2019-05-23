function NegativePositiveNumbers(arr) {
  let negativeNumbersArr = [];
  let positiveNumbersArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) < 0) {
      negativeNumbersArr.unshift(arr[i]);
    } else {
      positiveNumbersArr.push(arr[i]);
    }
  }

  for (let i = 0; i < negativeNumbersArr.length; i++) {
    console.log(negativeNumbersArr[i]);
  }
  for (let i = 0; i < positiveNumbersArr.length; i++) {
    console.log(positiveNumbersArr[i]);
  }
}

//NegativePositiveNumbers([3, -4, -3, -6, 0, -1, 6]);