var ticTacToe = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

var counter = 0;
var winner = '';
var xWins = 0;
var oWins = 0;
var gameRounds = 1;

$('.box').click(function() {
  // Assign box:
  // Alternate between X and O with each click.
  if (!$(this).hasClass('X') && !$(this).hasClass('O')) {
    if (counter % 2 === 0) {
      $(this).addClass('X');
      $(this).addClass('flip');
      counter += 1;
    } else if (counter % 2 != 0) {
      $(this).addClass('O');
      $(this).addClass('flip');
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
  // If winner has been determined, stop game and announce winner.
  if (winner === 'X') {
    $('.box').addClass('X');
    $('.box').addClass('flip');
  } else if (winner === 'O') {
    $('.box').addClass('O');
    $('.box').addClass('flip');
  }
  // Keeping tabs of player scores
  playerScores();

  if (xWins === 1) {
    $('.X-1').addClass('winX');
  } else if (xWins === 2) {
    $('.X-2').addClass('winX');
  } else if (xWins === 3) {
    $('.X-3').addClass('winX');
  }

  if (oWins === 1) {
    $('.O-1').addClass('winO');
  } else if (oWins === 2) {
    $('.O-2').addClass('winO');
  } else if (oWins === 3) {
    $('.O-2').addClass('winO');
  }
})

// Reset board to beginning state.
$('.hexagon').click(function() {
  $('.box').removeClass('X');
  $('.box').removeClass('O');
  $('.box').removeClass('mouseOverX');
  $('.box').removeClass('mouseOverO');
  $('.box').removeClass('flip');
  winner = '';
  counter = 0;
  for (var i = 0; i < ticTacToe.length; i++) {
    for (var j = 0; j < ticTacToe[i].length; j++) {
      ticTacToe[i][j] = null;
    }
  };
  if (xWins === 3 || oWins === 3) {
    xWins = 0;
    oWins = 0;
    $('.X-1').removeClass('winX');
    $('.X-2').removeClass('winX');
    $('.X-3').removeClass('winX');
    $('.O-1').removeClass('winO');
    $('.O-2').removeClass('winO');
    $('.O-3').removeClass('winO');
  }
})

// Move images on screen.
$(document).mousemove(function(event) {
  moveImage('.bird1', 300);
  moveImage('.bird2', 800);
})

// // Mouse-over effects over boxes.
// $('.box').mouseover(function() {
//   if (counter % 2 === 0 && !$(this).hasClass('mouseOverO')) {
//     $(this).addClass('mouseOverX');
//   } else if (counter % 2 != 0 && !$(this).hasClass('mouseOverX')) {
//     $(this).addClass('mouseOverO');
//   }
// })
// $('.box').mouseleave(function() {
//   if (counter % 2 === 0) {
//     $(this).removeClass('mouseOverX');
//   } else if (counter % 2 != 0) {
//     $(this).removeClass('mouseOverO');
//   }
// })

// Display number of rounds on document.
$('.rounds').html('ROUND: ' + gameRounds);

// Check for winner.
function checkForWinner() {
  checkHorizontal();
  checkVertical();
  checkDiagonal();
  return winner;
}

// Log player scores.
function playerScores() {
  if (winner === 'X') {
    return xWins += 1;
  } else if (winner === 'O') {
    return oWins += 1;
  }
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

// Find mouse position and how much to move.
function moveImage(selector, speed) {
  var x = event.pageX;
  var y = event.pageY;
  windowWidth = $(window).width();
  var mouseX = x - (windowWidth / 2);
  windowHeight = $(window).height();
  var mouseY = y - (windowHeight / 2);

  var selector = $(selector);
  var selectorLeft = selector.data('left');
  selector.css('left', selectorLeft + mouseX/speed + '%');
  var selectorTop = selector.data('top');
  selector.css('top', selectorTop + mouseY/speed + '%');
}
