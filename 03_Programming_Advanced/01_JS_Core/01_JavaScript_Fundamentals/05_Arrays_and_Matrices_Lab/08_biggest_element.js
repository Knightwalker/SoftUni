function BiggestElement(matrix) {

  let bigNum = -999999;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {

      if (matrix[i][j] > bigNum) {
        bigNum = matrix[i][j];
      }

    }
  }
  console.log(bigNum);

}

//BiggestElement([[20, 50, 10], [8, 33, 145]]);