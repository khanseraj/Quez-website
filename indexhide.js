const quizData = [
    {
        question: "what does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hypertext Machine Language",
            "Hyperlink and Text Markup Language",
        ],
        correct: 0,
    },
    {
        question: "Which CSS property is used to control the spacing between elements?",
        options:[ "margin", "padding", "spacing", "border-spacing"],
        correct: 1,
    },
    {
        question: "What is JavaScript function is used to select an HTML element by its id?",
        options: [
            "document.query",
            "getElementById",
            "selectElement",
            "findElementById",
        ],
        correct: 1,
    },
    {
        question: "Is React.js, which hook is used to perform side effects in a function component",
        options:[ "useEffect", "useState", "useContext", "useReducer"],
        correct: 0,
    },
    {
        question: "Which HTML tag is used to create an ordered list?",
        options:[ "<ul>", "<li>", "<ol>", "<dl>"],
        correct: 2,
    },

];

const quiz = document.querySelector('#quiz');

const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4, ] = document.querySelectorAll("#question, .option_1, .option_2, .option_3, .option_4");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;


const loadQuiz = () => {
    const {question, options} = quizData[currentQuiz];
    console.log(options);

    questionElm.innerText = `${currentQuiz + 1}:${question}`

    options.forEach((curOption, index) => (window[`option_${index + 1}`].innerText = curOption));

};


loadQuiz();

const getSelectedOption = () => {
    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
};

const deselectedAnswers = () => {
    answerElm.forEach((curElem) => curElem.checked = false);
};

submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex === quizData[currentQuiz].correct){
        score = score + 1;
    }

    currentQuiz++;

    if(currentQuiz < quizData.length){
        deselectedAnswers();
        loadQuiz();
    }else{
        quiz.innerHTML = `
        <div class="result">
            <h2>Your Score: ${score}/${quizData.length} Correct Answers</h2>
            <p>Congratulations on completing the Quiz!</p>
            <button class="reload_button" onclick="location.reload()">Play Again</button>
        </di>
        `;
    }
});