// Ignore this
try {
    const target = document.querySelector('[alt*="000webhost"]');
    if (target) {
        var div = target.parentElement.closest("div");
        if (div) {
            div.remove();
        }
    }
} catch (error) { }

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const correctAnswer = document.getElementById("correct-answer");

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

const questions = [
    {
        question: 'Atomic number of Hydrogen?',
        answers: shuffle([
            { text: '2', correct: false },
            { text: '1', correct: true },
            { text: '4', correct: false },
            { text: '3', correct: false }
        ])
    },
    {
        question: 'Atomic number of Helium?',
        answers: shuffle([
            { text: '1', correct: false },
            { text: '3', correct: false },
            { text: '2', correct: true },
            { text: '4', correct: false }
        ])
    },
    {
        question: 'Atomic number of Lithium?',
        answers: shuffle([
            { text: '4', correct: false },
            { text: '3', correct: true },
            { text: '6', correct: false },
            { text: '5', correct: false }
        ])
    },
    {
        question: 'Atomic number of Beryllium?',
        answers: shuffle([
            { text: '2', correct: false },
            { text: '3', correct: false },
            { text: '4', correct: true },
            { text: '5', correct: false }
        ])
    },
    {
        question: 'Atomic number of Boron?',
        answers: shuffle([
            { text: '5', correct: true },
            { text: '6', correct: false },
            { text: '7', correct: false },
            { text: '4', correct: false }
        ])
    },
    {
        question: 'Atomic number of Carbon?',
        answers: shuffle([
            { text: '7', correct: false },
            { text: '8', correct: false },
            { text: '6', correct: true },
            { text: '5', correct: false }
        ])
    },
    {
        question: 'Atomic number of Nitrogen?',
        answers: shuffle([
            { text: '5', correct: false },
            { text: '7', correct: true },
            { text: '6', correct: false },
            { text: '8', correct: false }
        ])
    },
    {
        question: 'Atomic number of Oxygen?',
        answers: shuffle([
            { text: '9', correct: false },
            { text: '7', correct: false },
            { text: '6', correct: false },
            { text: '8', correct: true }
        ])
    },
    {
        question: 'Atomic number of Flourine?',
        answers: shuffle([
            { text: '11', correct: false },
            { text: '8', correct: false },
            { text: '10', correct: false },
            { text: '9', correct: true }
        ])
    },
    {
        question: 'Atomic number of Neon?',
        answers: shuffle([
            { text: '11', correct: false },
            { text: '10', correct: true },
            { text: '13', correct: false },
            { text: '12', correct: false }
        ])
    },
    {
        question: 'Atomic number of Sodium?',
        answers: shuffle([
            { text: '12', correct: false },
            { text: '11', correct: true },
            { text: '9', correct: false },
            { text: '10', correct: false }
        ])
    },
    {
        question: 'Atomic number of Magnesium?',
        answers: shuffle([
            { text: '10', correct: false },
            { text: '11', correct: false },
            { text: '12', correct: true },
            { text: '13', correct: false }
        ])
    },
    {
        question: 'Atomic number of Aluminium?',
        answers: shuffle([
            { text: '12', correct: false },
            { text: '11', correct: false },
            { text: '14', correct: false },
            { text: '13', correct: true }
        ])
    },
    {
        question: 'Atomic number of Silicon?',
        answers: shuffle([
            { text: '14', correct: true },
            { text: '15', correct: false },
            { text: '13', correct: false },
            { text: '16', correct: false }
        ])
    },
    {
        question: 'Atomic number of Phosphorous?',
        answers: shuffle([
            { text: '16', correct: false },
            { text: '17', correct: false },
            { text: '15', correct: true },
            { text: '14', correct: false }
        ])
    },
    {
        question: 'Atomic number of Sulphur?',
        answers: shuffle([
            { text: '16', correct: true },
            { text: '17', correct: false },
            { text: '15', correct: false },
            { text: '18', correct: false }
        ])
    },
    {
        question: 'Atomic number of Chlorine?',
        answers: shuffle([
            { text: '18', correct: false },
            { text: '17', correct: true },
            { text: '19', correct: false },
            { text: '16', correct: false }
        ])
    },
    {
        question: 'Atomic number of Argon?',
        answers: shuffle([
            { text: '20', correct: false },
            { text: '19', correct: false },
            { text: '18', correct: true },
            { text: '17', correct: false }
        ])
    },
    {
        question: 'Atomic number of Potassium?',
        answers: shuffle([
            { text: '20', correct: false },
            { text: '19', correct: true },
            { text: '17', correct: false },
            { text: '18', correct: false }
        ])
    },
    {
        question: 'Atomic number of Calcium?',
        answers: shuffle([
            { text: '19', correct: false },
            { text: '20', correct: true },
            { text: '21', correct: false },
            { text: '18', correct: false }
        ])
    },
    {
        question: 'Atomic number of Scandium?',
        answers: shuffle([
            { text: '21', correct: true },
            { text: '20', correct: false },
            { text: '22', correct: false },
            { text: '23', correct: false }
        ])
    },
    {
        question: 'Atomic number of Titanium?',
        answers: shuffle([
            { text: '21', correct: false },
            { text: '24', correct: false },
            { text: '23', correct: false },
            { text: '22', correct: true }
        ])
    },
    {
        question: 'Atomic number of Vanadium?',
        answers: shuffle([
            { text: '22', correct: false },
            { text: '25', correct: false },
            { text: '23', correct: true },
            { text: '24', correct: false }
        ])
    },
    {
        question: 'Atomic number of Chromium?',
        answers: shuffle([
            { text: '21', correct: false },
            { text: '24', correct: true },
            { text: '23', correct: false },
            { text: '22', correct: false }
        ])
    },
    {
        question: 'Atomic number of Manganese?',
        answers: shuffle([
            { text: '25', correct: true },
            { text: '24', correct: false },
            { text: '22', correct: false },
            { text: '23', correct: false }
        ])
    },
    {
        question: 'Atomic number of Iron?',
        answers: shuffle([
            { text: '25', correct: false },
            { text: '24', correct: false },
            { text: '26', correct: true },
            { text: '27', correct: false }
        ])
    },
    {
        question: 'Atomic number of Cobalt?',
        answers: shuffle([
            { text: '29', correct: false },
            { text: '26', correct: false },
            { text: '28', correct: false },
            { text: '27', correct: true }
        ])
    },
    {
        question: 'Atomic number of Nickel?',
        answers: shuffle([
            { text: '25', correct: false },
            { text: '28', correct: true },
            { text: '26', correct: false },
            { text: '27', correct: false }
        ])
    },
    {
        question: 'Atomic number of Copper?',
        answers: shuffle([
            { text: '29', correct: true },
            { text: '30', correct: false },
            { text: '28', correct: false },
            { text: '27', correct: false }
        ])
    },
    {
        question: 'Atomic number of Zinc?',
        answers: shuffle([
            { text: '29', correct: false },
            { text: '28', correct: false },
            { text: '30', correct: true },
            { text: '31', correct: false }
        ])
    }
];

const questionCount = document.getElementById("question-count");
const resetBtn = document.getElementById("reset-btn");
const installButton = document.getElementById("install-btn");

let installPrompt = null;

if (window.matchMedia('(display-mode: standalone)').matches) {
    installButton.setAttribute("hidden", "");
}

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    installButton.removeAttribute("hidden");
});

installButton.addEventListener("click", async () => {
    if (!installPrompt) {
        return;
    }
    const result = await installPrompt.prompt();
    console.log(`Install prompt was: ${result.outcome}`);
    installPrompt = null;
    installButton.setAttribute("hidden", "");
});


(function () {
    let shuffledQuestions, currentQuestionIndex;
    let noOfCorrect = 0;
    let correctNumber = 0;

    startButton.addEventListener('click', startGame);
    nextButton.addEventListener('click', () => {
        correctNumber = 0;
        currentQuestionIndex++;
        setNextQuestion();
    });

    function startGame() {
        noOfCorrect = 0;
        correctAnswer.innerText = null;
        startButton.classList.add('hide');
        shuffledQuestions = shuffle(questions);
        currentQuestionIndex = 0;
        questionContainerElement.classList.remove('hide');
        setNextQuestion();
        questionCount.innerText = null;
        questionCount.innerText = `Question: ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;
    }

    resetBtn.onclick = startGame;

    function setNextQuestion() {
        resetState();
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }

    function showQuestion(question) {
        questionCount.innerText = `Question: ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;
        questionElement.innerText = question.question;
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButtonsElement.appendChild(button);
        })
    }

    function resetState() {
        clearStatusClass(document.body);
        nextButton.classList.add('hide');
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct;
        setStatusClass(document.body, correct);
        Array.from(answerButtonsElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct);
        });
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            nextButton.classList.remove('hide');
        } else {
            startButton.innerText = 'Restart';
            startButton.classList.remove('hide');
        }
    }

    function setStatusClass(element, correct) {
        clearStatusClass(element);
        if (correct) {
            element.classList.add('correct');
            if (correctNumber < 1) {
                noOfCorrect++;
            }
        } else {
            element.classList.add('wrong');
        }
        correctNumber++;
        correctAnswer.innerText = `Correct: ${noOfCorrect}`;
    }

    function clearStatusClass(element) {
        element.classList.remove('correct');
        element.classList.remove('wrong');
    }
})();