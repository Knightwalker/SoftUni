function ExtractIncreasingSubsequence(arr) {

  let biggestNum = -999999;
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    if (currentNum >= biggestNum) {
      biggestNum = currentNum;
    } else {
      arr.splice(i, 1);
      i--;
    }

  }

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

}

//ExtractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);