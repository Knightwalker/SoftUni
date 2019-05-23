function DiagonalSums(matrix) {

  let res = [];
  let sumMainDiagonal = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < i + 1; j++) {
      sumMainDiagonal += Number(matrix[i][j]);
    }
  }

  let sumSecondaryDiagonal = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = matrix.length - 1 - i; j > matrix.length - i - 2; j--) {
      sumSecondaryDiagonal += Number(matrix[i][j]);
    }
  }

  res.push(sumMainDiagonal);
  res.push(sumSecondaryDiagonal);
  console.log(res.join(" "));

}

//DiagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);