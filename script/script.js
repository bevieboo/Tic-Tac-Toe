var ticTacToe = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
//
var playerOneColor = '';
var playerTwoColor = '';
var counter = 0;
var winner = '';
var xWins = 0;
var oWins = 0;
var gameRound = 1;

showPlayerTurn();

$('.box').click(function() {
  // Assign box:
  // Alternate between X and O with each click.
  determinePlayerTurn(this);

  // Assign an Id relevant to the position of each box.
  // Assign player to array ticTacToe to find the winner.
  updateArray(this);

  // Check for winner every time each box is clicked.
  checkForWinner();

  // If winner has been determined, stop game and announce winner.
  announceWinner();

  // Keeping tabs of player scores
  playerScores();

  if (winner) {
    $('.ticTacToe').addClass('disabled');
    // if (!xWins >= 3 || !oWins >= 3) {
    //   gameRound += 1;
    // }
  }

  // Run show player turn again to match counter.
  showPlayerTurn();

})

function showPlayerTurn() {
  if (counter % 2 === 0) {
    $('.playerOne').addClass('playerSelected');
    $('.playerTwo').removeClass('playerSelected');
  } else if (counter % 2 != 0) {
    $('.playerTwo').addClass('playerSelected');
    $('.playerOne').removeClass('playerSelected');
  }
}

function determinePlayerTurn(box) {
  if (!$(box).hasClass('X') && !$(box).hasClass('O')) {
    if (counter % 2 === 0) {
      $(box).addClass(playerOneColor);
      $(box).addClass('flip');
      counter += 1;
    } else if (counter % 2 != 0) {
      $(box).addClass(playerTwoColor);
      $(box).addClass('flip');
      counter += 1;
    }
  }
}

function updateArray(index) {
  if ($(index).hasClass(playerOneColor)) {
    var x1 = $(index).attr('id')[3];
    var x2 = $(index).attr('id')[4];
    ticTacToe[x1][x2] = 'X';
  } else if ($(index).hasClass(playerTwoColor)) {
    var o1 = $(index).attr('id')[3];
    var o2 = $(index).attr('id')[4];
    ticTacToe[o1][o2] = 'O';
  }
}

// Change all squares to winner's colors.
function announceWinner() {
  if (winner === 'X') {
    $('.box').addClass(playerOneColor);
    $('.box').removeClass(playerTwoColor);
    $('.box').addClass('flip');
  } else if (winner === 'O') {
    $('.box').addClass(playerTwoColor);
    $('.box').removeClass(playerOneColor);
    $('.box').addClass('flip');
  } else if (counter === 9) {
    // console.log('TAI');
    $('.box').removeClass(playerOneColor);
    $('.box').removeClass(playerTwoColor);
    counter = 0;
    gameRound += 1;
  }
}

// Move images on screen.
$(document).mousemove(function(event) {
  moveImage('.bird1', 80);
  moveImage('.bird2', 100);
  moveImage('.bird3', 120);
  moveImage('.bird4', 400);
})

// Log player scores.
function playerScores() {
  if (winner === 'X') {
    xWins += 1;
  } else if (winner === 'O') {
    oWins += 1;
  }

  // When a player wins, update player's score card.
  if (xWins === 1) {
    $('.X-1').addClass('winX ' + playerOneColor);
  } else if (xWins === 2) {
    $('.X-2').addClass('winX ' + playerOneColor);
  } else if (xWins === 3) {
    $('.X-3').addClass('winX ' + playerOneColor);
  }
  if (oWins === 1) {
    $('.O-1').addClass('winO ' + playerTwoColor);
  } else if (oWins === 2) {
    $('.O-2').addClass('winO ' + playerTwoColor);
  } else if (oWins === 3) {
    $('.O-3').addClass('winO ' + playerTwoColor);
  }

}

// Find mouse position and how much to move.
function moveImage(selector, speed) {
  var x = event.pageX;
  var y = event.pageY;
  windowWidth = $(window).width();
  // Want center point to be in the middle. ie 0,0.
  // Want images to move left and right from middle point.
  var mouseX = x - (windowWidth / 2);
  windowHeight = $(window).height();
  var mouseY = y - (windowHeight / 2);

  var selector = $(selector);
  var selectorLeft = selector.data('left');
  selector.css('left', selectorLeft + mouseX/speed + '%');
  var selectorTop = selector.data('top');
  selector.css('top', selectorTop + mouseY/speed + '%');
}

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
