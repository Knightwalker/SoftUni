function orbit(input) {
  let [width, height, y, x] = input;
  let matrix = [];
  for (let i = 0; i < height; i++) {
    matrix.push(Array(width).fill());
  }

  let number = 1;
  let coordinatesQueue = [];
  let coordinatesPoint = [y, x, number];
  coordinatesQueue.push(coordinatesPoint);

  while(coordinatesQueue.length > 0) {
    let point = coordinatesQueue.pop();
    let row = point[0];
    let col = point[1];
    let n = point[2];

    if (row < 0 || row >= matrix.length) { continue; }
    if (col < 0 || col >= matrix.length) { continue; }
    if (matrix[row][col] != undefined) { continue; }

    matrix[row][col] = n;
    coordinatesQueue.unshift([row - 1, col,     n + 1]);
    coordinatesQueue.unshift([row - 1, col + 1, n + 1]);
    coordinatesQueue.unshift([row,     col + 1, n + 1]);
    coordinatesQueue.unshift([row + 1, col + 1, n + 1]);
    coordinatesQueue.unshift([row + 1, col,     n + 1]);
    coordinatesQueue.unshift([row + 1, col - 1, n + 1]);
    coordinatesQueue.unshift([row,     col - 1, n + 1]);
    coordinatesQueue.unshift([row - 1, col - 1, n + 1]);

  }
 
  let res = "";
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      res += matrix[i][j] + " ";
    }
    res += "\n";
  }
  console.log(res);

}

orbit([3, 3, 2, 2]);