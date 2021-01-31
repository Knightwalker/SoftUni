function main(args) {

  let board = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ];

  // player
  let currentPlayerMark = "X";
  let currentWinner = "no_winner";

  for (let i = 0; i < args.length; i++) {
    let [y, x] = args[i].split(" ");

    // check if field is already marked
    if (board[y][x] !== false) {
      console.log('This place is already taken. Please choose another!');
      continue;
    }

    // player marks a field
    if (board[y][x] === false) {
      board[y][x] = currentPlayerMark;
      if (currentPlayerMark == "X") { currentPlayerMark = "O"; }
      else if (currentPlayerMark == "O") { currentPlayerMark = "X"; }
    } 

    // scan board for a winner
    if (scanForWinner(board, "X")) {
      currentWinner = "X";
      break;
    }
    else if (scanForWinner(board, "O")) {
      currentWinner = "O";
      break;
    } else if (gameEnded(board)) {
      break;
    }

  }

  function scanForWinner(board, mark) {

    // check rows
    for (let i = 0; i < board.length; i++) {
      let count = 0;
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] == mark) {
          count++;
        }
      }
      if (count == 3) {
        return true;
      }
    }

    // check cols
    for (let i = 0; i < board.length; i++) {
      let count = 0;
      for (let j = 0; j < board.length; j++) {
        if (board[j][i] == mark) {
          count++;
        }
      }
      if (count == 3) {
        return true;
      }
    }

    // check diagonal
    let count = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[i][i] == mark) {
        count++;
      }
    }
    if (count == 3) {
      return true;
    }
  
    // check antidiagonal
    count = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[i][board.length - 1 - i] == mark) {
        //console.log(board[i][board.length - 1 - i] + "[" + i + "]" + "[" + (board.length - 1 - i) + "]");
        count++;
      }
    }
    if (count == 3) {
      return true;
    }

    return false;
  }

  function gameEnded(board) {

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] === false) {
          return false;
        }
      }
    }

    return true;
  }

  let message = "";
  if (currentWinner != "no_winner") {
    message += `Player ${currentWinner} wins!\n`;
  } else {
    message += "The game ended! Nobody wins :(\n";
  }

  // print the board
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      message += board[i][j] + "\t";
    }
    message += "\n";
  }
  console.log(message);

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