var ticTacToe = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

var counter = 0;
var winner = '';

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
  console.log(checkForWinner());
  // If winner has been determined, stop game and announce winner.
  if (winner === 'X') {
    console.log('winner x set')
    $('.box').addClass('winnerX');
  } else if (winner === 'O') {
    $('.box').addClass('winnerO');
  }
})

$('.reset').click(function() {
  $('.box').removeClass('X');
  $('.box').removeClass('O');
  $('.box').removeClass('winnerX');
  $('.box').removeClass('winnerO');
  winner = '';
  counter = 0;
  for (var i = 0; i < ticTacToe.length; i++) {
    for (var j = 0; j < ticTacToe[i].length; j++) {
      ticTacToe[i][j] = null;
    }
  }
})

$(document).mousemove(function(event) {
  var x = event.pageX;
  var y = event.pageY;
  windowWidth = $(window).width();
  var offsetX = windowWidth / 2;
  var mouseX = x - offsetX;
  windowHeight = $(window).height();
  var offsetY = windowHeight / 2;
  var mouseY = y - offsetY;
  var $bird1 = $('.bird1')
  var bird1Left = $bird1.data('left');
console.log($('.header').data('butts'));
  $bird1.css('left', bird1Left + mouseX/500 + '%');
  // console.log( parseInt(bird1Left) + mouseX );
})


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
