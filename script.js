var ticTacToe = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

var counter = 0;

$('.box').click(function() {
  // Assign box:
  // Alternate between X and O with each click.
  if (!$(this).hasClass('X') && !$(this).hasClass('O')) {
    if (counter % 2 === 0) {
      $(this).addClass('X');
      counter += 1;
    } else if (counter % 2 != 0) {
      $(this).addClass('O');
      counter += 1;
    }
  }
  // Assign an Id relevant to the position of each box.
  // Assign player to array ticTacToe to find the winner.
  if ($(this).hasClass('X')) {
    var x1 = $(this).attr('id')[3];
    var x2 = $(this).attr('id')[4];
    ticTacToe[x1][x2] = 'X';
  } else if ($(this).hasClass('O')) {
    var o1 = $(this).attr('id')[3];
    var o2 = $(this).attr('id')[4];
    ticTacToe[o1][o2] = 'O';
  }
  // Check for winner every time each box is clicked.
  checkForWinner();
})

// Find if all elements in an array are the same.
Array.prototype.allValuesSame = function() {
  for(var i = 1; i < this.length; i++)
  {
    if(this[i] !== this[0])
    return false;
  }
  return true;
}

// Check each horizontal rows for winner.
function checkHorizontal() {
  var winner = '';
  for (var i = 0; i < ticTacToe.length; i++) {
    var row = ticTacToe[i];
    if (row.allValuesSame() ) {
      if (row[0] != null) {
        return winner = row[0];
      }
    }
  }
}

function checkForWinner() {
  console.log(checkHorizontal());
  // Check vertical.
  // Check diagonal.
}

//
// console.log(checkHorizontal('o'));

// function checkVertical() {
//
// }
//
// function checkDiagonal() {
//
// }
