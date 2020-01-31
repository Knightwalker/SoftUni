function main(array){
  const matrix = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ];
 
  let symbol = 'X';
  for (let i = 0; i < array.length; i++) {
    let row = array[i][0];
    let col = array[i][2];
 
    if(matrix[row][col] !== false){
      console.log("This place is already taken. Please choose another!");
      continue;
    }
 
    matrix[row][col] = symbol;
   
    if(win(matrix, symbol) == true){
      console.log(`Player ${symbol} wins!`);
      break;
    } else {

      // dali igrata e priklu4ila trqbva da e v else - ne znam zashto... 10ti test ina4e gurmi, nqkwi tupotii sus koe e console.log-nalo purvo
      let hasFalse = false;
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if(matrix[i][j] == false){
            hasFalse = true;
          }        
        }
      }
      if(hasFalse == false){
        console.log("The game ended! Nobody wins :(");
        break;
      }

    }
 
    if(symbol == 'X'){
      symbol = 'O';
    }
    else{
      symbol = 'X';
    }
  }
 
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join("\t"));
  }

  function win(matrix, symbol){
    //check rows - kali
    // for (let i = 0; i < matrix.length; i++) {
    //   if(matrix[i][0] == symbol){
    //     if(matrix[i][0] ==matrix[i][1]){
    //       if(matrix[i][0] ==matrix[i][2]){
    //         return true;
    //       }
    //     }
    //   }
    // }

    // check rows - kris
    for (let i = 0; i < matrix.length; i++) {
      let count = 0; // proverqvash 1vi red, ako posledovatelno nqma 3 simvola minavash na 2ri red a count-a otnovo stava 0
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[i][j] == symbol) {
          count++;
        }
      }
      if (count == 3) { // counta na nqkoi ot redovete e 3, break -> imame pobeditel
        return true;
      }
    }
 
    //check cols - kali
    // let cols = matrix.map(function(row, i){
    //   return matrix.map(function(row){
    //     return row[i];
    //   });
    // });
   
    // for (let i = 0; i < cols.length; i++) {
    //   if(cols[i][0] == cols[i][1] == symbol){
    //     if(cols[i][1] == cols[i][2]){
    //       return true;
    //     }
    //   }
    // }

    // check cols - kris
    for (let i = 0; i < matrix.length; i++) {
      let count = 0;
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[j][i] == symbol) {
          count++;
        }
      }
      if (count == 3) {
        return true;
      }
    }
 
    //check primary diagonal
    if(matrix[0][0] == symbol){
      if(matrix[1][1] == symbol){
        if(matrix[2][2] == symbol){
          return true;
        }
      }
    }
 
    //check secondary diagonal
    if(matrix[0][2] == symbol){
      if(matrix[1][1] == symbol){
        if(matrix[2][0] == symbol){
          return true;
        }
      }
    }
 
    return false;
  }
}
 
main(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
);
 
main(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
);
 
main(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
);