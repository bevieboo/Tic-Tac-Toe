// Choosing colors:
// When a color is clicked, a class 'selected' is added.
// If another color is picked, the class 'selected' gets removed.
$('.color').click(function() {
  $(this).addClass('selected');
  $(this).siblings('.color').removeClass('selected');
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
  // Assign color to a new variable to be referenced in script.js
  playerOneColor = $('.userOne .color.selected').attr('class').split(' ')[0];
  console.log(playerOneColor);
  playerTwoColor = $('.userTwo .color.selected').attr('class').split(' ')[0];
  console.log(playerTwoColor);

})
