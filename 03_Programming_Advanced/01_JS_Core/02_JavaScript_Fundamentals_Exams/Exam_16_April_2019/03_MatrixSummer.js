function SumMatrix(matrix1, matrix2) {
  let resMatrix = [];
  let remainder = 0;
  for (let i = 0; i < matrix1.length; i++) {
    resMatrix.push([]);
    for (let j = 0; j < matrix1[i].length; j++) {
      let currentSum = matrix1[i][j] + matrix2[i][j];
      currentSum += remainder;
      remainder = 0;

      if (currentSum > 9) {
        resMatrix[i].push(9);
        currentSum -= 9;
        remainder += currentSum;
      } else {
        resMatrix[i].push(currentSum);
      }
    }

    //console.log(JSON.stringify(resMatrix));
    //console.log(remainder);

    if (remainder > 0) {
      while (remainder > 0) {
        if (remainder > 9) {
          resMatrix[i].push(9);
          remainder -= 9;
        } else {
          resMatrix[i].push(remainder);
          remainder -= remainder;
        }
      }
    }

  }

  console.log(JSON.stringify(resMatrix));
  
}

//SumMatrix(
//  [[1, 2, 3], [3, 4, 5], [5, 6, 7]], 
//  [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
//);

//SumMatrix(
//  [[9, 2, 3], [4, 5, 6], [7, 8, 8]],
//  [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
//)

//SumMatrix(
//  [[9, 9], [4, 7]],
//  [[7, 1], [1, 2]]
//);