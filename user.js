$('.color').click(function() {
  $(this).siblings('.color').removeClass('selected')
  $(this).addClass('selected');
})

$('.js-play').click(function() {
  // Get names.
  playerOneName = $('.userOneName input').val();
  playerTwoName = $('.userTwoName input').val();
  $('.playerOne h3').html(playerOneName);
  $('.playerTwo h3').html(playerTwoName);
  // Hide user screen on 'Play'.
  $('.userOptions').hide();

  // Get user selected colors.
  playerOneColor = $('.userOne .color.selected').attr('class').split(' ')[0];
  console.log(playerOneColor);
  playerTwoColor = $('.userTwo .color.selected').attr('class').split(' ')[0];
  console.log(playerTwoColor);

})
