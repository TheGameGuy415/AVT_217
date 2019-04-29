$(document).ready(function()
  {
      // run function on initial page load
      jokes();
  });

function jokes()
  {
    var jokesArray =
      ["Did you hear about the restaurant on the moon?",
      "What do you call a fake noodle?",
      "Want to hear a joke about paper?",
      "Why did the scarecrow win an award?",
      "Want to hear a joke about construction?",
      "Did you hear about the kidnapping at school?",
      "Why don't you ever see elephants hiding in trees?",
      "Why did the old man fall down the well?",
      "I know a lot of jokes about retired people",
      "What do you call a bear with no teeth?",
      "What is big, grey and not that important?",
      "When is a joke considered a dad joke?",
      "What's the difference between a guitar and a fish?",
      "Why do fish struggle in school?",
      "Why did the man not shave his beard?",
      "What do you call a belt made out of dollar bills?",
      "Do you want to hear a joke about ghosts?",
      "Why shouldn't you get married at a gym?",
      "Why is yogurt so diverse?",
      "Why do programmers hate the outdoors?"]
    var promptArray =
      ["No what about it?",
      "I don't know, what?",
      "Sure.",
      "I don't know, why?",
      "Sure.",
      "Oh no, what happened?",
      "I don't know, why?",
      "I don't know, why?",
      "And?",
      "I don't know, what?",
      "I don't know, what?",
      "I don't know, when?",
      "I don't know, what?",
      "I don't know, why?",
      "I don't know, why?",
      "I don't know, what?",
      "Sure.",
      "I don't know, why?",
      "I don't know, why?",
      "I don't know, why?"]
    var pnchlineArray =
      ["Great food, no atmosphere.",
      "An Impasta.",
      "Nevermind it's tearable.",
      "Because he was outstanding in his field.",
      "I'm still working on it.",
      "It's fine, he woke up.",
      "Because they’re really really good at it.",
      "Because he couldn’t see that well.",
      "None of them work.",
      "A Gummy Bear.",
      "An Irrelephant.",
      "When it becomes apparent.",
      "You can tune a guitar, but you can't tuna fish!",
      "They're below C level.",
      "It grew on him.",
      "A waist of money.",
      "That's the spirit!",
      "Because it never works out.",
      "Because of the culture",
      "Too many bugs",]
  	var index = Math.floor(Math.random() * jokesArray.length);

    console.log(index);
    console.log(jokesArray[index]);
    console.log(pnchlineArray[index]);
    console.log(promptArray[index]);

    $('#joke').text(jokesArray[index]);
    $('#pnchline').text(pnchlineArray[index]);
    $('#button').text(promptArray[index]);

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

            var test = index;
            while(test == index)
              {
                index = Math.floor(Math.random() * jokesArray.length)
              }
            console.log(index);
            console.log(jokesArray[index]);
            console.log(pnchlineArray[index]);
            console.log(promptArray[index]);

            $('#joke').text(jokesArray[index]);
            $('#pnchline').text(pnchlineArray[index]);
            $('#button').text(promptArray[index]);

            shown = false;
          }
      });
  }
