function TableFilter(matrix, command) {
  
  //console.log(matrix);
  let commandArr = command.split(" ");
  let commandStr = commandArr[0];
  
  if (commandStr == "hide") {
    let header = commandArr[1];
    let delRow = -1;
    let delIndex = -1;

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (header == matrix[i][j]) {
          delRow = i;
          delIndex = j;
          break;
        }
      }
    }

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        //if (i != delRow) {
          if (j == delIndex) {
            matrix[i].splice(j, 1);
          }
        //}
      }
    }

  } else if (commandStr == "sort") {
    let header = commandArr[1];
    let sortIndex = -1;

    for (let i = 0; i < matrix[0].length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (header == matrix[i][j]) {
          sortIndex = j;
          break;
        }
      }
    }

    let temp = matrix.shift();
    matrix.sort(function(a, b) {

      // if string, sort alphabetically
      if (isNaN(a[sortIndex]) && isNaN(b[sortIndex])) {
        return a[sortIndex].localeCompare(b[sortIndex]);
      // if number, sort by number
      } else {
        if (Number(a[sortIndex]) > Number(b[sortIndex])) {
          return 1;
        } else if (Number(a[sortIndex]) < Number(b[sortIndex])) {
          return -1;
        }
      }

    });
    matrix.unshift(temp);

  } else if (commandStr == "filter") {
    let header = commandArr[1];
    let value = commandArr[2];
    let tempArr = [[],[]];
    let header_index = -1;
    let value_row = -1;
    let value_col = -1;

    //console.log(header);
    //console.log(value);

    // copy header
    for (let i = 0; i < matrix[0].length; i++) {
      tempArr[0].push(matrix[0][i]);
    }
    // get header index
    for (let i = 0; i < matrix[0].length; i++) {
      if (header == matrix[0][i]) {
        header_index = i;
        break;
      }
    }
    // get value index
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (header_index == j) {
          if (value == matrix[i][j]) {
            value_row = i;
            value_col = j;
            break;
          }
        }
      }
    }

    //console.log(value_row);
    //console.log(value_col);

    // copy value row
    for (let i = 0; i < matrix[value_row].length; i++) {
      tempArr[1].push(matrix[value_row][i]);
    }

    matrix = tempArr;

  }

  // print
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" | "));
  }

}