function DiagonalAttack(arr) {

  // creates a matrix from the array of strings
  let matrix = [];
  for (let i = 0; i < arr.length; i++) {
    matrix[i] = arr[i].split(" ");
  }

  //console.log(matrix);
  // record the main and secondary diagonal indexes;
  let indexRowArr = [];
  let indexColArr = [];

  // get the sum of the main diagonal
  let sumMainDiagonal = 0;
  for (let i = 0; i < matrix.length; i++) {
    //console.log(matrix[i]);
    for (let j = i; j < i + 1; j++) {
      //console.log(matrix[i][j]);
      sumMainDiagonal += Number(matrix[i][j]);
      indexRowArr.push(i);
      indexColArr.push(j);
    }
  }

  // get the sum of the secondary diagonal
  let sumSecondaryDiagonal = 0;
  for (let i = 0; i < matrix.length; i++) {
    //console.log(matrix[i]);
    for (let j = matrix.length - 1 - i; j >= matrix.length - 1 - i; j--) {
      //console.log(matrix[i][j]);
      sumSecondaryDiagonal += Number(matrix[i][j]);
      indexRowArr.push(i);
      indexColArr.push(j);
    }
  }

  //console.log(sumMainDiagonal);
  //console.log(sumSecondaryDiagonal);
  //console.log(indexRowArr);
  //console.log(indexColArr);

  // print
  if (sumMainDiagonal == sumSecondaryDiagonal) {
    for (let i = 0; i < matrix.length; i++) {
      //console.log(matrix[i]);
      for (let j = 0; j < matrix.length; j++) {
        //console.log(matrix[i][j]);
        
        // check if the row and coll is part of the main or secondary diagonal
        let validateDiagonal = false;
        for (let k = 0; k < indexRowArr.length; k++) {
          if (indexRowArr[k] == i && indexColArr[k] == j) {
            validateDiagonal = true;
            break;
          }
        }

        if (validateDiagonal == false) {
          matrix[i][j] = String(sumMainDiagonal);
        }

      } 
    }

    for (let i = 0; i < matrix.length; i++) {
      console.log(matrix[i].join(" "));
    }

  } else {
    for (let i = 0; i < matrix.length; i++) {
      console.log(matrix[i].join(" "));
    }
  }

}

//DiagonalAttack(['5 3 12 3 1',
//'11 4 23 2 5',
//'101 12 3 21 10',
//'1 4 5 2 2',
//'5 22 33 11 1']
//);