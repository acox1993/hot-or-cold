
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


 secretNumber = Math.floor(Math.random()*(100-1) + 1);
 counter = 0;


  	newgame();

  	function guess() {
  		var input = $('#userGuess').val();
  		if (isNaN(input)) {
  			$('h2#feedback').html('Please enter a number');
  			return
  		};
  		if (input < 1 || input > 100) {
  			$('h2#feedback').html('Please enter a number between 1 and 100');
  			return
  		};
  		console.log(input)
  		console.log(secretNumber)
  		
  		var smallerNumber = Math.min(input, secretNumber);
  		var largerNumber = Math.max(input, secretNumber);
  		var difference = largerNumber - smallerNumber;
  		if (input == secretNumber) {
        $('h2#feedback').html('Congratulations you have guessed the right number. Click new game to play again.');
      }
      else if (difference >= 1 && difference < 10) {
  			$('h2#feedback').html("You're on fire");
  		}
      else if (difference >= 10 && difference < 20) {
        $('h2#feedback').html("You're very hot");
      }
      else if (difference >= 20 && difference < 30) {
        $('h2#feedback').html("You're hot");
      }
      else if (difference >= 30 && difference < 40) {
        $('h2#feedback').html("You're warm");
      }
      else if (difference >= 40 && difference < 50) {
        $('h2#feedback').html("You're luke warm");
      }
      else if (difference >= 50 && difference < 60) {
        $('h2#feedback').html("You're cool");
      }
      else if (difference >= 60 && difference < 70) {
        $('h2#feedback').html("You're cold");
      }
      else if (difference >= 70 && difference < 80) {
        $('h2#feedback').html("You're freezing");
      }
      else {
        $('h2#feedback').html("You're ice cold");
      };
  		counter++;
  		$('#count').html(counter);
  		// add to guessed list
  		$('input#userGuess').val('').focus();
      $('#guessList').append('<li>' + input + '</li>'); 
  	};
    $(document).keydown(function(e) {
      if (e.keyCode == 13) {
           guess();
        }
    });
  	$('#guessButton').click(function() {
  		guess();
  	});
  	function newgame() {
  		console.log(secretNumber);
  		return secretNumber

  	};
     
});


