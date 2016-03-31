// Reset board to beginning state.
$('.hexagon').click(function() {
  $('.box').removeClass(playerOneColor);
  $('.box').removeClass(playerTwoColor);
  // $('.box').removeClass('mouseOverX');
  // $('.box').removeClass('mouseOverO');
  $('.box').removeClass('flip');
  $('.ticTacToe').removeClass('disabled');
  counter = 0;
  for (var i = 0; i < ticTacToe.length; i++) {
    for (var j = 0; j < ticTacToe[i].length; j++) {
      ticTacToe[i][j] = null;
    }
  };
  if (xWins >= 3 || oWins >= 3) {
    xWins = 0;
    oWins = 0;
    gameRound = 0;
    $('.X-1').removeClass(playerOneColor);
    $('.X-2').removeClass(playerOneColor);
    $('.X-3').removeClass(playerOneColor);
    $('.O-1').removeClass(playerTwoColor);
    $('.O-2').removeClass(playerTwoColor);
    $('.O-3').removeClass(playerTwoColor);
  }
  if (winner) {
    gameRound += 1;
    $('.rounds').html('ROUND: ' + gameRound);
    winner = '';
  }
})
