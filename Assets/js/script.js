//create startBtn var = references start button in HTML
var startBtn = document.querySelector('#start');
//var for displaying time countdown
var pageTime = document.querySelector('#time');
//var for questions
var question = document.querySelector("#question");
//var for question content
var questionName = document.querySelector("#name");
//var for answer choices
var choices = document.querySelector("#choices");
//create timer var = starting time
var timeLeft = 60;
//create interval timer = countdown time
var timeInterval;

var currentQuestion;

var counter = 0;

var nameScore = document.querySelector("#score");
var scoreName = document.querySelector("#scoreName");
var scoreSubmit = document.querySelector("#scoreSubmit");


//startGame event listener parameter
function startGame(){
    //set value for timeInterval
    timeInterval = setInterval(timeDuration, 1000); //subtracts 1 second from timeLeft. every second, runs timeDuration function
    //declaring function to display questions
    displayQuestion();
}

//function to display and filter through questions
function displayQuestion() {
    currentQuestion = questions[0]; //arrays must use brackets
    //console.log(currentQuestion);
    //question content function
    questionName.textContent = currentQuestion.name;
    console.log(questionName); //still learning how to console log. Is this right???
    //forEach loop to recall choices var array. currentQuestion is object
    currentQuestion.choices.forEach(function(choice) {
        //console.log(choice);
        //what does this do???
        let choiceBtn = document.createElement("button");
        //gives buttons their value "content"
        choiceBtn.setAttribute("value", choice)
        //event listener for choiceBtn element and compares answers
        choiceBtn.addEventListener("click", questionClick);
        });
        choiceBtn.textContent = choice;
        //appends to choices container in HTML
        choices.appendChild(choiceBtn);
}

//function for event listener above
function questionClick(e) {
    //lets us know what button user clicked
    //console.log(e.target.value);
    if(e.target.value === currentQuestion.answer) {
        console.log("correct");
    } else {
        console.log("false");
        //tells program to go to the next question
        coutner++;
        //
        if(counter === questions.length) {
            endgame()
        } else {
            choices.innerHTML();
        }
        //clears out html inside of choices div
        choices.innerHTML = "";

        displayQuestion();
    }
}

function endgame () {
    //clears timer countdown
    clearInterval(timeInterval);
    //removes hide attribute for score 
    nameScore.removeAttribute("class");
}

scoreSubmit.addEventListener("click", function() {
   var userName = scoreName.value;
    //console.log(scoreName.value);
    //console.log(timeLeft);

    localStorage.setItem(userName, timeLeft);
});

//timer running in the background
function timeDuration() {
    //deducts time from var timeLeft
    timeLeft--;
    //displays time countdown
    pageTime.textContent = timeLeft;

    //what would this be called???
    if(timeLeft === 0) {
        clearInterval(timeInterval);
    }
}

//created button click
startBtn.addEventListener("click", startGame); 