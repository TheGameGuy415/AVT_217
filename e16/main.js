$(document).ready(function()
  {
    $('#listName').mouseenter(function()
      {
        $('#listName').addClass('blue');
        $('#title').css('color', 'white');
      });
    $('#listName').mouseleave(function()
      {
        $('#listName').removeClass('blue');
        $('#title').css('color', 'black');
      });

    $('#g1Title').click(function()
      {
        $('#game1').toggleClass('blue');
        $('#game1').toggleClass('open');
      });

  });
