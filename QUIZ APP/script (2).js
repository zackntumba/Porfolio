const quizData = [
  {
    question: "Quel est le langage de programmation le plus utilisé en 2024?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    e: "Php",
    correct: "d",
  },
  {
    question: "Qui est le président des États-Unis ?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    e: "Emmanuel macron",
    correct: "b",
  },
  {
    question: "Que signifie HTML?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    e: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "En quelle année JavaScript a-t-il été lancé?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "2001",
    e: "aucune des réponses ci-dessus",
    correct: "b",
  },

  {
    question: "Qui est le président de la RD Congo?",
    a: "Abdiou diouf",
    b: "Jacob zuma",
    c: "Felix tshisekedi",
    d: "Joao lorenzo",
    e: "Denis sassou ngesso",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
