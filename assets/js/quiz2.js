// function to calculate the result of the survey
function generateAnswer() {
    //here we want to initialise our variables for each choice's score
    // if we add more choices and outcomes, you must add another variable here.
    var c1score = 0;
    var c2score = 0;
    var c3score = 0;
    var c4score = 0;
    var c5score = 0;
    var c6score = 0;

    //here we then get a list of the radio inputs on the page:
    var choices = document.getElementsByTagName('input');
    // now we loop through all of the radio inputs
    for (i = 0; i < choices.length; i++) {
        //if the radio is checked...
        if (choices[i].checked) {
            //add 1 to that choice's score
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
            if (choices[i].value == 'c5') {
                c5score = c5score + 1;
            }
            if (choices[i].value == 'c6') {
                c6score = c6score + 1;
            }
            //if you add moe choices and outcomes you must add another if statement as above
        }
    }
    //find out which choice got the highest score.
    // if you add more choices and outcomes, you must add the variable here.
    var maxscore = Math.max(c1score, c2score, c3score, c4score, c5score, c6score);

    //display answer corresponding to that choice
    var answerbox = document.getElementById('answer');
    if (c1score == maxscore) {
        //if the uer chooses the first choice the most, this outcome will be displayed.
        answerbox.innerHTML = "You got London!";
    }
    if (c2score == maxscore) {
        answerbox.innerHTML = "You got NYC!";
    }
    if (c3score == maxscore) {
        answerbox.innerHTML = "You got Rio!";
    }
    if (c4score == maxscore) {
        answerbox.innerHTML = "You got Rio!";
    }
    if (c5score == maxscore) {
        answerbox.innerHTML = "You got Rio!";
    }
    if (c6score == maxscore) {
        answerbox.innerHTML = "You got Rio!";
    }
    //if you add more choices, you must add another response here
    return false;

}


// to stop the refresh when submitting the form


// resetting the quiz
function resetAnswer() {
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = "You get the final result here!"
}
resetAnswer();

