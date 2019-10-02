// select all element ids as variables
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const questionImg = document.getElementById("question-img");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
//const scoreContainer = document.getElementById("scoreContainer");


//when page is loaded, the user must click 'let's go' button, so we add event listener to that button.
start.addEventListener("click", startQuiz);

//renderQuestion() - renders the question.
// start.style.display="none"; - line of code which will hide the Start quiz button
//quiz.style.display="block"; - will display the quiz block, we set it to dsplay none in html code.

// start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
}

//rendering a question. here we access the running question, then change the innerHTML of the elements
function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    questionImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

// in the buttons we have class of choice of answer for the user: "choice", we have a name which relates to which question, i.e. "A" which is the first question,
// then we have a value attributed to the option which relates to it's weight of answer. It has an ID to indicate the path of the answer.
// it also has a onclick event which instigates a clickcount so that the user's response is stored as they progress through the quiz.
// example: <button class="choice" name="A" value="1" id="choiceA" onclick="clickCounter()">Eur</button>

//creating our questions
let questions = [
    {
        question: "Where do you fancy exploring?",
        imgSrc: "",
        choiceA: "Europe",
        choiceB: "North America",
        choiceC: "South America",
        answer1: "You get London",
        answer2: "You get NYC",
        answer3: "You get Rio",
    },
    {
        question: "What do you fancy doing there?",
        imgSrc: "",
        choiceA: "Culture and Sightseeing",
        choiceB: "Adventure and Excitement",
        choiceC: "Relaxation and the Beach",
    }
];

//  2 variables which first is starting question index which is zero and the second is index of last question
const lastQuestion = question.length - 1;
let runningQuestion = 0;




function generateAnswer(answer) {
    if (answer == questions[runningQuestion].choiceA) {
        $("#answer1").onclick(function (event) {
            event.preventDefault();
            answer1.style.display = "block";
        });
        return "You get London";
    } else if (answer == questions[runningQuestion].choiceB) {
        $("#answer2").onclick(function (event) {
            event.preventDefault();
            answer2.style.display = "block";
        });
        return "You get NYC";
    } else if (answer == questions[runningQuestion].choiceC) {
        $("#answer3").onclick(function (event) {
            event.preventDefault();
            answer3.style.display = "block";
        });
        return "You get Rio";
    }
}

//Add code to log your answers to the console
// make the form not do what it usually would
// organize the answers into an object that you can read and assign it to a "answers" variables
// Log the answers to the console
//$("#quiz").click(function (event) {
 //   event.preventDefault();
//let answers = $(this).serializeArray();
 //  for(let answer of answers) {
  //     console.log(answer.value);
  // }
//});

//function checking the user's response
//choiceA.addEventListener("onclick", generateAnswer);
//choiceB.addEventListener("onclick", generateAnswer);
//choiceC.addEventListener("onclick", generateAnswer);


//document.getElementById("container").onclick=function() {
//  choice = parseInt(document.querySelector('input[name = "A"]').value);
//  total = 0;
//    document.getElementById("answer").innerHTML = total;

//  if (total <= 1) {
//      document.getElementById("answer1").innerHTML = "You're off to London";
//  }
//  if (total === 2) {
//      document.getElementById("answer2").innerHTML = "You're off to NYC";
//  }
//  if (total >= 3) {
//      document.getElementById("answer").innerHTML = "You're off to Rio";
//  }
//  return true;

//};













