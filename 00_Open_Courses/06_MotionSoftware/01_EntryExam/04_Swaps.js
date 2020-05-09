function main(array) {
  let dimensions = array.shift().split(' ');
  let row = dimensions[0];
  let col = dimensions[1];

  let matrix = [];

  for (let i = 0; i < row; i++) {
    let data = array.shift().split(' ');
    matrix.push(data);
  }

  for(let i = 0; i < array.length; i++) {
    let data = array[i].split(' ');
    
    if(data[0] == 'END') {
      break;
    }

    if(data[0] != 'swap' || data.length != 5) {
      console.log('Invalid input!');
      continue;
    }

    let row1 = data[1];
    let col1 = data[2];
    let row2 = data[3];
    let col2 = data[4];

    if((row1 < 0 || row1 >= matrix.length || row2 < 0 || row2 >= matrix.length) || (col1 < 0 || col1 >= matrix[row1].length || col2 < 0 || col2 >= matrix[row1].length)) {
      console.log('Invalid input!');
      continue;
    }

    let temp = matrix[row1][col1];
    matrix[row1][col1] = matrix[row2][col2];
    matrix[row2][col2] = temp;

    for (let i = 0; i < matrix.length; i++) {
      console.log(matrix[i].join(' '));
    }
  }

}

main(['2 3',
  '1 2 3',
  '4 5 6',
  'swap 0 0 1 1',
  'swap 10 9 8 7',
  'swap 0 1 1 0',
  'END'
  ]);