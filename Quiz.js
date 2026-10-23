let currentQuestionIndex=0;
let score=0;
let selectedAnswer=null;
let questions=[
    {
        question:"which language is used to make web pages interactive?",
        options:["HTML","CSS","JavaScript","Python"],
        answer:"JavaScript"
    },
    {
        question:"which keyword is used to declare a constant in javascript?",
        options:["var","let","const","constant"],
        answer:"const"
    },
    {
        question:"which method is used to add an element at the end of an array in javascript?",
        options:["push()","pop()","shift()","unshift()"],
        answer:"push()"
    },
    {
        question:"which HTML tag is used to include javascript?",
        options:["<js>","<script>","<javascript>","<code>"],
        answer:"<script>"
    },
    {
        question:"which method is used to give pop ups in the browser",
        options:["console.log()","document.writeln()","alert()","document.write()"],
        answer:"alert()"
    },
    {
        question:"which type of function does not have function name ?",
        options:["anonymous function","arrow function","pure function","impure function"],
        answer:"anonymous function"
 
    },
    {
    question: "Which method creates a new HTML element?",
    options: [
        "appendChild()",
        "querySelector()",
        "createElement()",
        "getElementById()"
    ],
    answer: "createElement()"
},
{
    question: "Which method attaches an event handler to an element?",
    options: [
        "addEventListener()",
        "createEvent()",
        "appendChild()",
        "getAttribute()"
    ],
    answer: "addEventListener()"
},
{
     question: "What is the output? console.log(typeof NaN);",
    options: [
        "NaN",
        "undefined",
        "number",
        "object"
    ],
    answer: "number"
},
{
      question: "What is the output? console.log(1 + '2' + 3);",
    options: [
        "6",
        "123",
        "33",
        "Error"
    ],
    answer: "123"
}
];
let questionNumber = document.getElementById("question-number");
let questionElement = document.getElementById("question");
let optionsContainer = document.getElementById("options");
let nextButton = document.getElementById("next-button");
function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];

    questionNumber.textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(function(option) {
        let button = document.createElement("button");

        button.className = "options";
button.textContent = option;

button.addEventListener("click", function() {
    selectedAnswer = option;

    let allButtons = optionsContainer.querySelectorAll("button");

    allButtons.forEach(function(btn) {
        btn.style.backgroundColor = "";
    });

    button.style.backgroundColor = "lightblue";
});

optionsContainer.appendChild(button);
    });
}

displayQuestion();
nextButton.addEventListener("click", function() {

    if (selectedAnswer === null) {
        alert("Please select an answer!");
        return;
    }

    if (selectedAnswer === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        selectedAnswer = null;
        displayQuestion();
    } else {
    document.querySelector(".quiz-container").innerHTML = `
        <h1>Quiz Completed!</h1>
        <h2>Your Score: ${score}/${questions.length}</h2>
        <button id="restart-button">Restart Quiz</button>
    `;

    document.getElementById("restart-button").addEventListener("click", function() {
        currentQuestionIndex = 0;
        score = 0;
        selectedAnswer = null;

        location.reload();
    });
}   

});
