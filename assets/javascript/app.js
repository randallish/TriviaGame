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

// global variables with timer and correct/incorrect answers
var timer = 10;
var timerId;
var correct = 0;
var incorrect = 0;


// creates our questions 
function createQuestions() {
for (var i = 0; i < questions.length; i++){
    $("#form1").append('<h2 id="q">' + questions[i].question + "</h2>");

// appends answers to each question
for (var k = 0; k < questions[i].choices.length; k++){
    $("#form1").append("<input id='answer' type='radio' name='options" + i +
    "' value='" + questions[i].choices[k] + "''>" + questions[i].choices[k]);
}
}
};

// tried mulitple things to retrieve the value of the radio button,but just couldn't get it

// function answerChecker() {

//     for (var j = 0; j < questions.length; j++) {
//         if (userAnswer.checked === questions[j].answer){
//             correct++;
//         }
//         else {
//             incorrect++;
//         }
//     }
//     console.log(incorrect);
// }

// $('input[name="options-0"]').on("click",function() {
//     if ($(this).val() === questions[0].answer){
//         correct++;
//     }
//     else{
//         incorrect++;
//     }
//     console.log(this);
// });

// function value() {
//     var input = form1.elements;
//     var radios = [];
//     for (var o = 0; o < input.length; o++){
//         if (input[o].type == 'radio'){
//             radios.push(input[o]);
//         }
//     }
//     for (var o = 0; o < radios.length; o++){
//         if (radios[o].checked){
//             alert(radios[o].value);
//         }
//     }
//     for (var j = 0; j< questions[o].answer.length;j++){
//         if (radios[j].checked == questions[o].answer){
//             correct++;
//             console.log(radios);
//         }
//         else{
//             incorrect++;
//         }
//     }
// }


// var question0 = $('options0');
//    for(var e = 0; e < question0.length; e++) {
//       if(question0[e].checked) {
//          if(question0[e].value == '16 Warriors') {
//             correct++;
//             alert("you got it correct");
//             break;
//          }
//          else{
//              incorrect++;
//          }
//       }
//    }




// function that decreases timer by 1 and update our timer to the html
// if timer is 0, runs our stop() function and displayScore function
function countdown() {
    timer--;
    $("#time-remaining").html("<h2>" + "Time remaining: " + timer + "</h2>");
    if ( timer === 0){
        stop();
        // value();
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

// when timer is up, hide some images
// hide questions and display score
function displayScore() {
    $("#curry").hide();
    $("#kd").hide();
    $("#mj").hide();
    $("#form1").hide();
    $("#time-remaining").hide();
    $("body").append("<div id='correct'>" +  "Correct: "  + correct + "</div>");
    $("body").append("<div id='incorrect'>" + "Incorrect: " + incorrect + "</div>");
    $("#reset").show();
}

// hiding images
function hideItems() {
    $("#reset").hide();
    $("#mj").hide();
    $("#kobe").hide();
    $("#curry").hide();
    $("#lebron").hide();
}

// showing and hiding certain images depending on state of page
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

// reset button to reset html and empty values
// restarts the quiz
$("#reset").on("click",function() {
    timer = 60;
    correct = 0;
    incorrect = 0;
    $("#questions").show();  
    $("#time-remaining").show(); 
    $("#correct").empty();
    $("#incorrect").empty();

    showHide();
    start();
});

// button to show our questions and begin the quiz
$("#start").on("click", function(){
    showHide();
    createQuestions();
    start();
    //answerChecker();
});

hideItems();
// createQuestions();
