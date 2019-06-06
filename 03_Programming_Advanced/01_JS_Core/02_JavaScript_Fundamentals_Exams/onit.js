function TableFilter(matrix, command) {
  
  console.log(matrix);
  let commandArr = command.split(" ");
  let commandStr = commandArr[0];
  
  if (commandStr == "hide") {
    let header = commandArr[1];

    for (let i = 0; i < matrix.length; i++) {
      
        matrix[i].splice(0, 1);
      
    }
  }

  console.log(matrix);

}

TableFilter(
  [['name', 'age', 'grade'],
  ['Peter', '25', '5.00'],
  ['George', '34', '6.00'],
  ['Marry', '28', '5.49']],
  'hide name'
);