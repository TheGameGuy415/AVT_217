$(document).ready(function()
  {
      // run function on initial page load
      rps();
  });

function rps()
  {
  	var randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);

    $('#btn1').click(function()
      {
        if (randomNumber == 0)
          {
            $('#prompt').text('Draw');
            $('#img1').css('opacity', '1');
          }
        if (randomNumber == 1)
          {
            $('#prompt').text('You lose...');
            $('#img2').css('opacity', '1');
          }
        if (randomNumber == 2)
          {
            $('#prompt').text('You Win!');
            $('#img3').css('opacity', '1');
          }
      });

      $('#btn2').click(function()
        {
          if (randomNumber == 0)
            {
              $('#prompt').text('You Win!');
              $('#img1').css('opacity', '1');
            }
          if (randomNumber == 1)
            {
              $('#prompt').text('Draw');
              $('#img2').css('opacity', '1');
            }
          if (randomNumber == 2)
            {
              $('#prompt').text('You lose...');
              $('#img3').css('opacity', '1');
            }
        });

      $('#btn3').click(function()
        {
          if (randomNumber == 0)
            {
              $('#prompt').text('You lose...');
              $('#img1').css('opacity', '1');
            }
          if (randomNumber == 1)
            {
              $('#prompt').text('You Win!');
              $('#img2').css('opacity', '1');
            }
          if (randomNumber == 2)
            {
              $('#prompt').text('Draw');
              $('#img3').css('opacity', '1');
            }
        });
    }
