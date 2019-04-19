var panel = $("#quiz-area");

var countStartNumber = 30;

// Question set
var questions = [
    
    {
        question: "Who dated Ross in the well-known sitcom friends?",
        answers: ["Rachel", "Monica", "Phoebe", "Emily"],
        correctAnswer: "Rachel",
        image: "assests\ross and rachel 2.jpg"
    },

    {
        question: "Who was not a member of the wild cats in the movie High School Musical?",
        answers: ["Chase", "Troy", "Ryan", "Zeke"],
        correctAnswer: "Ryan",
        image: "assests\wild cats.jpg"
    }


]

// Variable to hold our setInterval
var timer;

var game = {

    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("TIME UP");
            game.timeUp();
        }
    },

    loadQuestion: function() {
        timer = setInterval(game.countdown, 1000);
        panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");
        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++)
        {
            panel.append("<button class='answer-button' id='button' data-name=' " +
            questions[this.currentQuestion].answer[i] +
            "'>" + questions[this.currentQuestion].answers[i] + "</button>");
        }
    },

    nextQuestion: function() {
        game.counter = countStartNumber;
        $("#counter-number").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },

    timeUp: function() {
        
    }



}