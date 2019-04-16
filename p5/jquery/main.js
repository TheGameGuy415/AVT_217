$(document).ready(function()
  {
      // run function on initial page load
      jokes();
  });

function jokes()
  {
    var jokesArray = ["Joke1","Joke2","Joke3","Joke4","Joke5","Joke6"]
    var pnchlineArray = ["pnchline1","pnchline2","pnchline3","pnchline4","pnchline5","pnchline6"]
  	var index = Math.floor(Math.random() * jokesArray.length);
    console.log(index);
    console.log(jokesArray[index]);
    console.log(pnchlineArray[index]);

    $('#joke').text(jokesArray[index]);
    $('#pnchline').text(pnchlineArray[index]);

    $('#button').click(function()
      {
        $('#pnchline').css('opacity', '1');
      });
  }

//Maybe re use button to reset the site, infinite jokes!
