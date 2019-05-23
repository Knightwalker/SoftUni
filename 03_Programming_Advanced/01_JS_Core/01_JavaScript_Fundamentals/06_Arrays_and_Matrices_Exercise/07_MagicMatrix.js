function MagicMatrix(arr) {

  let magicSum = 0;
  let magical = true;
  // get sum of 1 row
  for (let i = 0; i < arr.length; i++) {
    magicSum += arr[0][i];
  }

  // iterate horizontally
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    //console.log("---");
    //console.log(arr[i]);
    for (let j = 0; j < arr.length; j++) {
      //console.log(arr[i][j]);
      sum += arr[i][j];
    }
    if (sum != magicSum) { magical = false; }
  }

  // iterate vertically
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    //console.log("---");
    for (let j = 0; j < arr.length; j++) {
      //console.log(arr[j]);
      //console.log(arr[j][i]);
      sum += arr[j][i];
    }
    if (sum != magicSum) { magical = false; }
  }

  if (magical) {
    console.log(true);
  } else {
    console.log(false);
  }

}

//MagicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
//MagicMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);