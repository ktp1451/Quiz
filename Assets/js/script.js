//create startBtn var = references start button in HTML
var startBtn = document.querySelector('#start');
//var for displaying time countdown
var pageTime = document.querySelector('#time');
//var for questions
var question = document.querySelector("#question");
//var for question content
var name = document.querySelector("#name");
//var for answer choices
var choices = document.querySelector("#choices");
//create timer var = starting time
var timeLeft = 60;
//create interval timer = countdown time
var timeInterval;



//startGame event listener parameter
function startGame(){
    //set value for timeInterval
    timeInterval = setInterval(timeDuration, 1000); //subtracts 1 second from timeLeft. every second, runs timeDuration function
    //declaring function to display questions
    displayQuestion();
}

//function to display and filter through questions
function displayQuestion() {
    let currentQuestion = questions[0]; //arrays must use brackets
    //console.log(currentQuestion);
    //question contect function
    name.textContent = currentQuestion.name;
    console.log(name); //still learning how to console log. Is this right???
    //forEach loop to recall choices var array. currentQuestion is object
    currentQuestion.choices.forEach(function(choice) {
        //console.log(choice);
        //what does this do???
        let choiceBtn = document.createElement("button");
        choiceBtn.textContent = choice;
        //appends to choices container in HTML
        choices.appendChild(choiceBtn);
    });
}



//timer running in the background
function timeDuration(){

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