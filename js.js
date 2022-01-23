const header = document.querySelector(".header")
const clickedBtn = document.querySelector("#clicked");
const qContainer = document.querySelector(".q-container");
const questBox = document.querySelector(".q-box");
const everyAnswer = document.querySelector(".every-answer")
let response = document.querySelector(".response");
let timer = document.querySelector("#timer")

// let timeleft = document.querySelector 
//let timeText = document.querySelector("#timeText");
//let timer = "";


// local storage //
var results = ["highscore", "initials"];
localStorage.setItem("q_results", JSON.stringify(results)); //store highscore
var storedResults = JSON.parse(localStorage.getItem("q_results")); // retrieve them

for (var i = 0; i < storedResults.length; i++) {
    console.log(storedResults[i]);
}



// let saveAnswer = function() {
//     localStorage.setItem("answer", JSON.stringify(answer));
// };

// let loadAnswer = function() {
//     answer = JSON.parse(localStorage.getItem("answer"));

// }




const startQuiz = function () {
    console.log("started")
    questionIndex = 0;
};

var timeleft = "";
document.getElementById("clicked").addEventListener("click", function () {
    timeleft = 39;
    var downloadTimer = setInterval(function function1() {
        document.getElementById("timer").innerHTML = timeleft + " " + "";
        timeleft -= 1;
        if (timeleft <= -1) {
            clearInterval(downloadTimer);
            document.getElementById("timer").innerHTML = "Times up!"
        }
    }, 1000);

    showQuestions();
    header.remove();
    clickedBtn.remove();
});

    var questionsArray = [
        {
            questionText: "JavaScript uses what case?",
            choice: ["Uppercase", "Lowercase", "Both", "Not case sensitive"],
            answer: "Both",
        },
        {
            questionText: "Java script is the same as JavaScript ",
            choice: ["True", "False", "It depends on context", "All Java's are the same"],
            answer: "False",
        },
        {
            questionText: "How do you create a function in JavaScript? ",
            choice: ["function = myfunction()", "fun = ()", "function: fun()", "function myFunction()"],
            answer: "function myFunction()",
        },
        {
            questionText: "Which HTML element holds the JavaScript?",
            choice: ["<JavaScript>", "<script>", "<js>", "<jscript>"],
            answer: "<script>"
        }
    ]

    const showQuestions = function () {
        let currQuestion = questionsArray[questionIndex];

        let qContainer = document.createElement("div");
        questBox.prepend(qContainer);

        let questionTitle = document.createElement("h3");
        questionTitle.textContent = currQuestion.questionText;
        qContainer.appendChild(questionTitle);

        let aContainer = document.createElement("ol");
        everyAnswer.appendChild(aContainer);

        for (let i = 0; i < currQuestion.choice.length; i++) {
            var answerChoice = document.createElement("li");
            answerChoice.className = "answer";
            answerChoice.textContent = currQuestion.choice[i];

            var clickedAnswer = answerChoice.setAttribute("id", currQuestion.choice[i]);

            aContainer.appendChild(answerChoice);
        }

        aContainer.addEventListener("click", function (event) {
            answerChoice = event.target;
            if (answerChoice.id == currQuestion.answer) {
                response.innerHTML = '<h3>Correct</h3>';
                aContainer.appendChild(response);
                questionIndex++;
            }
            else {
                response.innerHTML = '<h3>Incorrect</h3>';
                aContainer.appendChild(response);
                timeleft -= 7;
                document.getElementById("timer").innerHTML = timeleft;
                questionIndex++;
            }

            const displayNextQuestion = setTimeout(function () {
                if (questionIndex < questionsArray.length) {
                    qContainer.remove();
                    aContainer.remove();
                    showQuestions();
                }
                else {
                    endQuiz();
                }
            }, 1000);
        })
    }

    const endQuiz = function () {


        clearInterval(timer);


        qContainer.remove();
        everyAnswer.remove();





    };





    showResults = function () { }
    // results function
    //viewResults = function(){}






    // call start quiz
    startQuiz()

    // click to begin quiz
    clickedBtn.addEventListener("click", startQuiz);


