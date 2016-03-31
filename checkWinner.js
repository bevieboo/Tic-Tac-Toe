// Check for winner.
function checkForWinner() {
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
        return winner = ticTacToe[i][0];
      }
    }
  }
}

// Check each vertical row for winner, excluding null value.
function checkVertical() {
  for (var i = 0; i < ticTacToe.length; i++) {
    if (ticTacToe[0][i] === ticTacToe[1][i] && ticTacToe[0][i] === ticTacToe[2][i]) {
      if (ticTacToe[0][i] != null) {
        return winner = ticTacToe[0][i];
      }
    }
  }
}

// Check diagonals for winner, excluding null value.
function checkDiagonal() {
  if (ticTacToe[0][0] === ticTacToe[1][1] && ticTacToe[0][0] === ticTacToe[2][2]) {
    if (ticTacToe[0][0] != null) {
      return winner = ticTacToe[0][0];
    }
  } else if (ticTacToe[0][2] === ticTacToe[1][1] && ticTacToe[0][2] === ticTacToe[2][0]) {
    if (ticTacToe[0][2] != null) {
      return winner = ticTacToe[0][2];
    }
  }
}
