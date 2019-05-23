function EqualNeighbors(matrix) {

  let counter = 0;

  // check vertical neighbors
  for (let i = 0; i < matrix.length; i++) {
    //console.log(matrix[i]);

    for (let j = 0; j < matrix[i].length; j++) {
      let currentStr = matrix[i][j];
      //console.log("current " + currentStr);

      if (i != matrix.length - 1) {
        for (let k = i + 1; k < i + 2; k++) {
          let neighborStr = matrix[k][j];
          //console.log("neigbor " + neighborStr);

          if (currentStr == neighborStr) { counter++; }
        }
      }

    }
  }

  // check horizontal neighbors
  for (let i = 0; i < matrix.length; i++) {
    //console.log(matrix[i]);
    for (let j = 0; j < matrix[i].length - 1; j++) {
      let currentStr = matrix[i][j];
      //console.log("current " + currentStr);

      for (let k = j + 1; k < j + 2; k++) {
          let neighborStr = matrix[i][k];
          //console.log("neigbor " + neighborStr);
          
          if (currentStr == neighborStr) { counter++; }
      }

    }
  }

  console.log(counter);

}

//EqualNeighbors([['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']]
//);

//EqualNeighbors([['2', '2', '5', '7', '4'],
// ['4', '0', '5', '3', '4'],
// ['2', '5', '5', '4', '2']
//]);
