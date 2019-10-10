//when page is loaded, the user must click 'let's go' button, so we add event listener to that button.
start.addEventListener("click", startQuiz);

//renderQuestion() - renders the question.
// start.style.display="none"; - line of code which will hide the Start quiz button
//quiz.style.display="block"; - will display the quiz block, we set it to dsplay none in html code.

// start quiz
function startQuiz() {
    var start = document.getElementById('start');
    start.style.display = "none";
    generateQuestion(0);
    quiz.style.display = "block";

    window.c1score = 0;
    window.c2score = 0;
    window.c3score = 0;
    window.c4score = 0;
    window.c5score = 0;
    window.c6score = 0;
}

// renderQuestion(); here we will want to make it so that once we click let's go we move down to the first question

var questions = [
    {
        question: "Where do you fancy exploring?",
        imgSrc: "",
        c1: "Africa",
        c2: "Asia",
        c3: "Australasia",
        c4: "Europe",
        c5: "North America",
        c6: "South America",
    },
    {
        question: "What do you fancy doing there?",
        imgSrc: "",
        c1: "Sightseeing and absorbing that culture",
        c2: "Going on an adventure!",
        c3: "Relaxing and going to the beach",
        c4: "Food. All the Food.",
        c5: "SPORTS.",
        c6: "I'm not sure, I just need to get away!",
    },
    {
        question: "What music will inspire you to get packing?",
        imgSrc: "",
        c1: "Indie and Alternative",
        c2: "Pop",
        c3: "HipHop and RnB",
        c4: "Classic Rock",
        c5: "Latin vibes",
        c6: "Afro-Beats",
    }
];

function generateQuestion(n) {
    var runningQuestionIndex = n;
    var question = document.getElementById('question');
    var q = questions[runningQuestionIndex];
    var lastQuestionIndex = questions.length - 1;

    if (runningQuestionIndex < lastQuestionIndex) {

        question.innerHTML = "<p>" + q.question + "</p>";
        questionImg.innerHTML = "<img src=" + q.imgSrc + ">";
        var c1 = document.getElementById('c1');
        var c2 = document.getElementById('c2');
        var c3 = document.getElementById('c3');
        var c4 = document.getElementById('c4');
        var c5 = document.getElementById('c5');
        var c6 = document.getElementById('c6');

        c1.innerHTML = "<button>" + q.c1 + "</button>";
        c2.innerHTML = "<button>" + q.c2 + "</button>";
        c3.innerHTML = "<button>" + q.c3 + "</button>";
        c4.innerHTML = "<button>" + q.c4 + "</button>";
        c5.innerHTML = "<button>" + q.c5 + "</button>";
        c6.innerHTML = "<button>" + q.c6 + "</button>";

    } else {
        generateAnswer();
    }
}


//generateQuestion();
//runningQuestionIndex++;
//generateQuestion();

//these should be global because if not then  each time is generate answer it will reset to zero


// function to calculate the result of the survey
function generateAnswer() {
    //here we want to initialise our variables for each choice's score
    // if we add more choices and outcomes, you must add another variable here.

  //here we then get a list of the radio inputs on the page:
    var choices = document.getElementsByTagName('choice');
    // now we loop through all of the radio inputs
    for (i = 0; i < choices.length; i++) {
        //if the radio is checked...
        if (choices[i].checked) {
            //add 1 to that choice's score
            if (choices[i].value == 'c1') {
                c1score = c1score + 1;
            }
            if (choices[i].value == 'c2') {
                c2score = c2score + 2;
            }
            if (choices[i].value == 'c3') {
                c3score = c3score + 3;
            }
            if (choices[i].value == 'c4') {
                c4score = c4score + 4;
            }
            if (choices[i].value == 'c5') {
                c5score = c5score + 5;
            }
            if (choices[i].value == 'c6') {
                c6score = c6score + 6;
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
        answerbox.innerHTML = "You got NYC!";
    }
    if (c4score == maxscore) {
        answerbox.innerHTML = "You got Rio!";
    }
    if (c5score == maxscore) {
        answerbox.innerHTML = "You got Rio!";
    }
    if (c6score == maxscore) {
        answerbox.innerHTML = "You got London!";
    }
    //if you add more choices, you must add another response here
    return false;

}


// to stop the refresh when submitting the form


// resetting the quiz
//function resetAnswer() {
//    var answerbox = document.getElementById('answer');
//    answerbox.innerHTML = "You get the final result here!"
//}


// generate the music playlist upon an answer
// if the individual