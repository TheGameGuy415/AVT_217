$(document).ready(function()
  {
    $('#listName').mouseenter(function()
      {
        $('#listName').addClass('blue');
        $('#listTitle').css('color', 'white');
      });
    $('#listName').mouseleave(function()
      {
        $('#listName').removeClass('blue');
        $('#listTitle').css('color', 'black');
      });

    $('#g1').click(function()
      {
        $('#g1').toggleClass('open');
      });
    $('#g2').click(function()
      {
        $('#g2').toggleClass('open');
      });
    $('#g3').click(function()
      {
        $('#g3').toggleClass('open');
      });
    $('#g4').click(function()
      {
        $('#g4').toggleClass('open');
      });
    $('#g5').click(function()
      {
        $('#g5').toggleClass('open');
      });
  });
