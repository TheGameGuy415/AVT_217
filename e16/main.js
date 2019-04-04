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

    $('#g1Title').click(function()
      {
        $('#game1').toggleClass('closed');
        $('#game1').toggleClass('open');
      });

  });
