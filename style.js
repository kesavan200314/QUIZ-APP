const questions = [
    {
        question: 'What is the  favarit movies?',
        answers: [
            { text: 'KGF', correct: false },
            { text: 'LEO', correct: false },
            { text: 'KAITHI', correct: true },
            { text: 'MASTER', correct: false }
        ]
    },
    {
        question: 'What is favarit cricket players?',
        answers: [
            { text: 'Arjuna Ranatunga', correct: false },
            { text: 'Chaminda Vaas', correct: true },
            { text: 'Lasith Malinga', correct: false },
            { text: 'Aravinda De Silva', correct: false }
        ]
    },
    {
        question: 'What is a programming language?',
        answers: [
            { text: 'c++', correct: false },
            { text: 'Java', correct: true },
            { text: 'Python', correct: false },
            { text: 'Javascript', correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

restartButton.addEventListener('click', () => {
    scoreContainer.style.display = 'none';
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
});

function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showScore();
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.innerText === answer.text) {
            button.classList.add(answer.correct ? 'correct' : 'wrong');
        }
    });
    nextButton.style.display = 'block';
}

function showScore() {
    questionContainer.style.display = 'none';
    scoreContainer.style.display = 'block';
    scoreElement.innerText = score;
}

// Start the quiz
setNextQuestion();
