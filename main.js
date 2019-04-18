var panel = $("#quiz-area");

var countStartNumber = 30;


//Questions set
var questions = [
    
    {
    questions:"What was Hannah Montana's real identity?"
    answers: ["Miley,Lilly,Mia,Laura"],
    correctAnswer: "Miley",
    image: 
    },


    {
        questions:"Who was not a member of the wild cats?"
        answers: ["Chase,Troy,Ryan,Zeke"],
        correctAnswer: "Ryan",
        image: 
        },
    
]
    // Variable to hold our setInterval
    var timer;

    var game = {

        questions: questions,
        currentQuestion = 0,
        Counter: countStartNumber,
        correct: 0,
        incorrect: 0,

    countdown: function() {

        game.correct--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log('TIME UP');
            game.timeUp();
        }

    }

    loadQuestion: function() {

        timer = set setInterval(game.counter, 1000);
        panel.html("<h2>"+ questions[this.currentQuestion].questions +"</h2>");
        for (var i = 0; i < questions[this.currentQuestion].answers.legnth; i++)
        panel.append("<button class='answer-button' id ='button' deta-name =''" + questions[this.currentQuestion].answers[i]) + "'>'" + questions[this.currentQuestion].answer[i] + "</button>";
    )

    };



}
