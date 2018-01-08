// creating an array of objects to store the questions/answers
var questions = [ {
    question: "Which team holds the best regular season record in NBA history?",
    choices: ["16 Warriors", "96 Bulls", "72 Lakers", "97 Bulls"],
    answer: "16 Warriors"
}, {
    question: "Which player has the most NBA championships?",
    choices: ["Michael Jordan", "Bill Russell", "Sam Jones", "Magic Johnson"],
    answer: "Bill Russell"
}, {
    question: "Who holds the record for the 2nd most points scored in a single game?",
    choices: ["Wilt Chamberlain", "Michael Jordan", "Kobe Bryant", "Elgin Baylor"],
    answer: "Kobe Bryant"
}, {
    question: "Which team had the longest winning streak in NBA history?",
    choices: ["Golden State Warriors", "Chicago Bulls", "Los Angeles Lakers", "Miami Heat"],
    answer:"Los Angeles Lakers"
}, {
    question: "How many MVP awards does LeBron James have?",
    choices: ["3", "4", "2", "5"],
    answer: "4"
}, {
    question: "Who recently averaged a triple-double over an NBA season?",
    choices: ["James Harden", "Russell Westbrook", "Draymond Green", "LeBron James"],
    answer: "Russell Westbrook"
}, {
    question: "What is the NBA record for most rebounds in a single game?",
    choices: ["55", "51", "45", "49"],
    answer: "55"
}, {
    question: "In recent memory, who is widely considered the greatest shooter of all-time?",
    choices: ["Ray Allen","Drazen Petrovic", "Stephen Curry", "Reggie Miller"],
    answer: "Stephen Curry"
},
]

// global variables
var timer = 30;
var timerId;
var correct = 0;
var incorrect = 0;
var userAnswer = [];

// creates our questions 
function createQuestions() {
for (var i = 0; i < questions.length; i++){
    $("#questions").append('<h2 id="q">' + questions[i].question + "</h2>");

// appends answers to each question
for (var k = 0; k < questions[i].choices.length; k++){
    $("#questions").append("<input id='answer' type='radio' name='options-" + i +
    "' value='" + questions[i].choices[k] + "''>" + questions[i].choices[k]);
}
}
};

function answerChecker() {
   userAnswer = $("input[name='options-']:checked").val();
    
    for (var j = 0; j < questions.length; j++) {
        if (userAnswer === questions[0].answer){
            correct++;
        }
        else {
            incorrect++;
        }
    }
}

// function that decreases timer by 1 and update our timer to the html
// if timer is 0, runs our stop() function
function countdown() {
    timer--;
    $("#time-remaining").html("<h2>" + "Time remaining: " + timer + "</h2>");
    if ( timer === 0){
        stop();
        displayScore();
    }
}

// function to run our countdown timer in 1 sec intervals
function start() {
    timerId = setInterval(countdown,1000)
}

// when timer hits 0, runs this to clear the timer
function stop() {
    clearInterval(timerId);
}

function displayScore() {
    $("#curry").hide();
    $("#kd").hide();
    $("#mj").hide();
    $("#questions").hide();
    $("#time-remaining").hide();
    $("#correct").append("Correct: "  + correct);
    $("#incorrect").append("Incorrect: " + incorrect);
    $("#reset").show();
}

function hideItems() {
    $("#reset").hide();
    $("#mj").hide();
    $("#kobe").hide();
    $("#curry").hide();
    $("#lebron").hide();
}

function showHide(){
    $("#start").hide();
    $("#mj").show();
    $("#kobe").show();
    $("#trivia").hide();
    $("#logo").hide();
    $("#reset").hide(); 
    $("#court").hide();
    $("#nba").hide();
    $("#basket").hide();
    $("#curry").show();
    $("#kobe-2").hide();
    $("#kd").hide();
    $("#lebron").show();
}


$("#reset").on("click",function() {
    timer = 60;
    createQuestions();
    start();
    answerChecker();
});

// button to show our questions and begin the quiz
$("#start").on("click", function(){
    showHide();
    createQuestions();
    start();
    answerChecker();
});

hideItems();
// createQuestions();
// start();
// answerChecker();