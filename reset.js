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
