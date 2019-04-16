$(document).ready(function()
  {
      // run function on initial page load
      jokes();
  });

function jokes()
  {
    // $('#pnchline').addClass('hidden');

    var jokesArray = ["joke1","joke2","joke3","joke4","joke5","joke6"]
    var pnchlineArray = ["pnchline1","pnchline2","pnchline3","pnchline4","pnchline5","pnchline6"]
  	var index = Math.floor(Math.random() * jokesArray.length);

    console.log(index);
    console.log(jokesArray[index]);
    console.log(pnchlineArray[index]);

    $('#joke').text(jokesArray[index]);
    $('#pnchline').text(pnchlineArray[index]);

    var shown = false;
    $('#button').click(function()
      {
        if (!shown)
          {
            $('#pnchline').removeClass('hidden');
            $('#pnchline').addClass('shown');
            $('#button').text('Give me another one!');

            shown = true;
          }
        else
          {
            $('#pnchline').removeClass('shown');
            $('#pnchline').addClass('hidden');
            $('#button').text('punchline prompt');

            index = Math.floor(Math.random() * jokesArray.length);
            $('#joke').text(jokesArray[index]);
            $('#pnchline').text(pnchlineArray[index]);

            shown = false;
          }
      });
  }
