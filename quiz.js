// function to calculate the result of the survey
function getAnswers() {
    // initialize variables for each choice's score
    // If you add more choices and outcomes, you must add another variable here.
    var c1score = 0;
    var c2score = 0;
    var c3score = 0;
    var c4score = 0;
    
    // get a list of the radio inputs on the page
    var choices = document.getElementsByTagName('input');
    // loop through all the radio inputs
    for (i=0; i<choices.length; i++) {
      // if the radio is checked..
      if (choices[i].checked) {
        // add 1 to that choice's score
        if (choices[i].value == 'c1') {
          c1score = c1score + 1;
        }
        if (choices[i].value == 'c2') {
          c2score = c2score + 1;
        }
        if (choices[i].value == 'c3') {
          c3score = c3score + 1;
        }
        if (choices[i].value == 'c4') {
          c4score = c4score + 1;
        }
      }
    }
    
    // Find out which choice got the highest score.
    var maxscore = Math.max(c1score,c2score,c3score,c4score);
    
    // Display answer corresponding to that choice
    var answerbox = document.getElementById('answer');
    answerBox.innerHTML = "Thank you for filling out the questionairre! You will be paired in 3-5 business days to a mentor who will assist and help you achieve your goals. Thank you for your time.";
    
  }
  
  // program the reset button
  function resetAnswer() {
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = "Your result will show up here!";
  }