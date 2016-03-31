$('.js-play').click(function() {
  // Get names.
  playerOneName = $('.userOneName input').val();
  playerTwoName = $('.userTwoName input').val();
  $('.playerOne h3').html(playerOneName);
  $('.playerTwo h3').html(playerTwoName);

  // Hide user screen on 'Play'.
  $('.userOptions').hide();
})
