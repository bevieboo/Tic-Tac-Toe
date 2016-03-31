// Check for winner.
function checkForWinner() {
  console.log(ticTacToe[0]);
  console.log(ticTacToe[1]);
  console.log(ticTacToe[2]);
  checkHorizontal();
  checkVertical();
  checkDiagonal();
  return winner;
}

// Check each horizontal row for winner, excluding null value.
function checkHorizontal() {
  for (var i = 0; i < ticTacToe.length; i++) {
    if (ticTacToe[i][0] === ticTacToe[i][1] && ticTacToe[i][0] === ticTacToe[i][2]) {
      if (ticTacToe[i][0] != null) {
        winner = ticTacToe[i][0];
        console.log('checkHorizontal');
      }
    }
  }
}

// Check each vertical row for winner, excluding null value.
function checkVertical() {
  for (var i = 0; i < ticTacToe.length; i++) {
    if (ticTacToe[0][i] === ticTacToe[1][i] && ticTacToe[0][i] === ticTacToe[2][i]) {
      if (ticTacToe[0][i] != null) {
        winner = ticTacToe[0][i];
        console.log('checkVertical');
      }
    }
  }
}

// Check diagonals for winner, excluding null value.
function checkDiagonal() {
  if (ticTacToe[0][0] === ticTacToe[1][1] && ticTacToe[0][0] === ticTacToe[2][2]) {
    if (ticTacToe[0][0] != null) {
      winner = ticTacToe[0][0];
      console.log('checkDiagonal');
    }
  } else if (ticTacToe[0][2] === ticTacToe[1][1] && ticTacToe[0][2] === ticTacToe[2][0]) {
    if (ticTacToe[0][2] != null) {
      winner = ticTacToe[0][2];
      console.log('checkDiagonal');
    }
  }
}
