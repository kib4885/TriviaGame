$(document).ready(function () {

    var correctAnswers = 0; // player correct answers
    var incorrectAnswers = 0; // player incorrect answers
    var noAnswer = 0; // player no answer due to timer running out
    var timer = 20; // timer 20 seconds per question
    var question = 0 // current question
    var movies = 0// current answers
    var randomQuestion;

    var gameQuestions = [
        {
            song: "Reflection",
            movie: [
                "Home on the Range",
                "Pinocchio",
                "Mulan",
                "The Lady and the Tramp"],
            answer: 2,
        },
        {
            song: "Part of Your World",
            movie: ["The Little Mermaid", "Alice in the Wonderland", "Frozen", "The Sword in the Stone"],
            answer: 0,
        },
        {
            song: "When Will My Life Begin",
            movie: ["A Goofy Movie", "Tangled", "The Great Mouse Detective", "Sleeping Beauty"],
            answer: 1,
        },
        {
            song: "The Work Song",
            movie: ["Cinderella", "The Hunchback of Notre Dame", "Pocahontas", "Oliver and Company"],
            answer: 0,
        },
        {
            song: "I'm Wishing",
            movie: ["The Princess and the Frog", "Peter Pan", "Cinderella", "Snow White and the Seven Dwarfs",],
            answer: 3,
        },
        {
            song: "Friends on the Other Side",
            movie: ["Lady and the Tramp", "The Princess and the Frog", "The Nightmare Before Christmas", "Alice in Wonderland",],
            answer: 1,
        },
        {
            song: "Be Our Guest",
            movie: ["Beauty and the Beast", "Aladdin", "The Jungle Book", "Frozen"],
            answer: 0,
        },
        {
            song: "Bella Notte",
            movie: ["The Little Mermaid", "The Hunchback of Notre Dame", "Lady and the Tramp", "Toy Story"],
            answer: 2,
        },
        {
            song: "Hakuna Matata",
            movie: ["Dumbo", "Sleeping Beauty", "101 Dalmatians", "The Lion King",],
            answer: 3,
        },
        {
            song: "Colors of the Wind",
            movie: ["Hercules", "Pocahontas", "Pinocchio", "Tangled"],
            answer: 1,
        },

    ]
    for (var i = 0; i < gameQuestions; i++) {
        console.log(gameQuestions[i].song);
        console.log(gameQuestions[i].movie);
        console.log(gameQuestions[i].answer);
    }


    // var randomQuestion = gameQuestions[Math.floor(Math.random() * gameQuestions.length)];
    // console.log("ok", randomQuestion);

    // console.log("I found my " + gameQuestions.song)
    // console.log(gameQuestions)
    // //pull random question 
    // // function random() {

    // }
    function random() {
        var randomNmber = [Math.floor(Math.random() * gameQuestions.length)];
        randomQuestion = gameQuestions[randomNumber];
        console.log("ok", randomQuestion);

        for (var i = 0; i < 4; i++) {
            var answer = gameQuestions[question].movie[i]; $(document).ready(function () {

                var correctAnswers = 0; // player correct answers
                var incorrectAnswers = 0; // player incorrect answers
                var noAnswer = 0; // player no answer due to timer running out
                var userGuess = "";
                var timer = 15; // timer 20 seconds per question
                console.log("okl", timer);
                var questionIndex; // current question
                var options;
                holder = [];
                console.log("okt", holder);
                newArray = [];
                var intervalId;
                var timerRunning = false;



                var gameQuestions = [
                    {
                        song: "Reflection",
                        movie: ["Home on the Range", "Pinocchio", "Mulan", "The Lady and the Tramp"],
                        answer: 2,
                        image: "assets/images/mulan.jpg",
                        // audio: "assets/audio/Mulan.m4a"
                    },
                    {
                        song: "Part of Your World",
                        movie: ["The Little Mermaid", "Alice in the Wonderland", "Frozen", "The Sword in the Stone"],
                        answer: 0,
                        image: "assets/images/Thelittlemermaid.jpg",
                        // audio: "assets/audio/Mermaid.m4a"
                    },
                    {
                        song: "When Will My Life Begin",
                        movie: ["A Goofy Movie", "Tangled", "The Great Mouse Detective", "Sleeping Beauty"],
                        answer: 1,
                        image: "assets/images/Tangled.jpg",
                        // audio: "assets/audio/Tangled.m4a"
                    },
                    {
                        song: "The Work Song",
                        movie: ["Cinderella", "The Hunchback of Notre Dame", "Pocahontas", "Oliver and Company"],
                        answer: 0,
                        image: "assets/images/Cinderella.jpg"
                    },
                    {
                        song: "I'm Wishing",
                        movie: ["The Princess and the Frog", "Peter Pan", "Cinderella", "Snow White and the Seven Dwarfs",],
                        answer: 3,
                        image: "assets/images/SnowWhite.jpg"
                    },
                    {
                        song: "Down In New Orleans",
                        movie: ["Lady and the Tramp", "The Princess and the Frog", "The Nightmare Before Christmas", "Alice in Wonderland",],
                        answer: 1,
                        image: "assets/images/ThePrincessFrog.jpg"
                    },
                    {
                        song: "Be Our Guest",
                        movie: ["Beauty and the Beast", "Aladdin", "The Jungle Book", "Frozen"],
                        answer: 0,
                        image: "assets/images/BeautyBeast.jpg"
                    },
                    {
                        song: "Bella Notte",
                        movie: ["The Little Mermaid", "The Hunchback of Notre Dame", "Lady and the Tramp", "Toy Story"],
                        answer: 2,
                        image: "assets/images/LadyTramp.jpg"
                    },
                    {
                        song: "Hakuna Matata",
                        movie: ["Dumbo", "Sleeping Beauty", "101 Dalmatians", "The Lion King",],
                        answer: 3,
                        image: "assets/images/TheLionKing.jpg"
                    },
                    {
                        song: "Colors of the Wind",
                        movie: ["Hercules", "Pocahontas", "Pinocchio", "Tangled"],
                        answer: 1,
                        image: "assets/images/Pocahontas.png"
                    },

                ]

                var count = gameQuestions.length;

                $("#reset").hide();

                $("#start").on("click", function () {
                    $("#directions").hide();
                    displayQuestion();
                    startTimer();
                    for (var i = 0; i < gameQuestions.length; i++) {
                        holder.push(gameQuestions[i]);
                    }
                })

                function startTimer() {
                    if (!timerRunning) {
                        intervalId = setInterval(decrement, 1000);
                        timerRunning = true;
                    }

                }

                function decrement() {
                    $("#timer").html("<h2> Time Remaining  " + timer + "</h2>");
                    timer--;


                    if (timer === 0) {
                        noAnswer++;
                        stop();
                        $("#answers").html("<p>Times Up! The correct answer is: " + options.movie[options.answer] + "</p>");
                        hidepicture();
                    }
                }

                function stop() {
                    timerRunning = false
                    clearInterval(intervalId);
                }


                function displayQuestion() {
                    //random question array
                    questionIndex = Math.floor(Math.random() * gameQuestions.length);
                    options = gameQuestions[questionIndex];
                    console.log("okp", gameQuestions.length)
                    console.log("ok3", questionIndex)
                    console.log("ok4", options)

                    $("#questions").html("<h2>" + options.song + "</h2>");
                    for (var i = 0; i < options.movie.length; i++) {
                        var userChoice = $("<div>");
                        userChoice.addClass("select");
                        userChoice.html(options.movie[i]);
                        userChoice.attr("data-guessvalue", i);
                        $("#answers").append(userChoice);
                    }

                    $(".select").on("click", function () {

                        userGuess = parseInt($(this).attr("data-guessvalue"));
                        console.log(this)

                        if (userGuess === options.answer) {
                            stop()
                            correctAnswers++;
                            userGuess = "";
                            $("#answers").html("<p>CORRECT!</p>");
                            hidepicture();
                            console.log(options.answer)
                        }

                        else {

                            stop()
                            incorrectAnswers++;
                            userGuess = "";
                            $("#answers").html("<p>WRONG! The correct answer is: " + options.movie[options.answer] + "</p>");
                            hidepicture();
                        }

                    })
                }

                function hidepicture() {
                    $("#images").append("<img src=" + options.image + ">");
                    newArray.push(options);
                    gameQuestions.splice(questionIndex, 1);
                    console.log("klj", gameQuestions)
                    console.log("jhj", questionIndex)
                    var hidpic = setTimeout(function () {

                        $("#images").empty();
                        $("#answers").empty();
                        timer = 15;

                        if ((incorrectAnswers + correctAnswers + noAnswer) === count) {

                            $("#questions").empty();
                            $("#questions").html("<h3> GAME OVER! See How You Did, below!</h3>");
                            $("#answers").append("<h4> Correct: " + correctAnswers + "</h4>");
                            $("#answers").append("<h4> Incorrect " + incorrectAnswers + "</h4>");
                            $("#answers").append("<h4> Unanswered: " + noAnswer + "</h4>");
                            $("#reset").show();
                            $("#timer").hide()
                            correctAnswers = 0;
                            incorrectAnswers = 0;
                            noAnswer = 0;
                        }

                        else {

                            startTimer()
                            displayQuestion()
                        }
                    }, 3000);
                }


                $("#reset").on("click", function () {
                    $("#reset").hide();
                    $("#answers").empty();
                    $("#questions").empty();
                    for (var i = 0; i < holder.length; i++) {
                        gameQuestions.push(holder[i]);
                    }
                    startTimer();
                    displayQuestion();

                })


            })
            $("#answers").append("<h4>" + answer + "</h4>");
        }
    }
    // random()
    // console.log("this", display)
    // function startgame() {
    //     $("#start").on("click", function () {
    //         $("#start").hide();
    // random();

    // runTimer();
    // for (var i = 0; i < gameQuestions.length; i++) {
    //         holder.push(gameQuestions[i]);}
})
    }

function display() {
    $("#questionCount").html('Question #' + (question + 1) + '/' + gameQuestions.length);
    //$("#questions").html(randomQuestion);
    $("#questions").html(randomQuestion.song);
    //$("#answers").html(gameQuestions[question].movie);
}

display();
startgame()
})