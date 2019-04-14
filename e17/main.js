$(document).ready(function()
  {
      // run function on initial page load
      rps();
  });

function rps()
  {
  	var randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    var msg = '';

    $('#btn1').click(function()
      {
        if (randomNumber == 0)
          {
            console.log("btn1 correct!");
            $('#prompt').text('You Win!');
            $('#img1').css('opacity', '1');
          }
        else
          {
            console.log("btn1 WRONG!");
            $('#prompt').text('You lose...');
          }

        if(randomNumber == 1)
          {
            $('#img2').css('opacity', '1');
          }
        if(randomNumber == 2)
          {
            $('#img3').css('opacity', '1');
          }

      });

      $('#btn2').click(function()
        {
          if (randomNumber == 1)
            {
              console.log("btn2 correct!");
              $('#prompt').text('You Win!');
              $('#img2').css('opacity', '1');
            }
          else
            {
              console.log("btn2 WRONG!");
              $('#prompt').text('You lose...');
            }

          if(randomNumber == 0)
            {
              $('#img1').css('opacity', '1');
            }
          if(randomNumber == 2)
            {
              $('#img3').css('opacity', '1');
            }
        });

      $('#btn3').click(function()
        {
          if (randomNumber == 2)
            {
              console.log("btn3 correct!");
              $('#prompt').text('You Win!');
              $('#img3').css('opacity', '1');
            }
          else
            {
              console.log("btn3 WRONG!");
              $('#prompt').text('You lose...');
            }

          if(randomNumber == 0)
            {
              $('#img1').css('opacity', '1');
            }
          if(randomNumber == 1)
            {
              $('#img2').css('opacity', '1');
            }
        });
    }
