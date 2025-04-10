const questionsDB = {
    variables: [
      {
        question: "Which keyword is used to declare a constant in JavaScript?",
        options: ["var", "let", "const", "constant"],
        answer: "const",
      },
      {
        question: "What is the scope of a 'var' variable?",
        options: ["Block", "Function", "Global", "Loop"],
        answer: "Function",
      },
      {
        question: "Which can be re-declared in the same scope?",
        options: ["var", "let", "const", "both let and const"],
        answer: "var",
      },
      {
        question: "Variables declared with let are:",
        options: ["Function scoped", "Block scoped", "Global", "Undefined"],
        answer: "Block scoped",
      },
      {
        question: "What happens if you assign a value to an undeclared variable?",
        options: ["Error", "Becomes global", "Becomes constant", "None"],
        answer: "Becomes global",
      },
      {
        question: "Which of the following is not a valid variable name?",
        options: ["_name", "$value", "123name", "user1"],
        answer: "123name",
      },
      {
        question: "What does 'let' prevent compared to 'var'?",
        options: ["Reassignment", "Re-declaration", "Hoisting", "None"],
        answer: "Re-declaration",
      },
      {
        question: "Is JavaScript case-sensitive?",
        options: ["Yes", "No"],
        answer: "Yes",
      },
      {
        question: "Which keyword is best for block-level variables?",
        options: ["var", "let", "const", "global"],
        answer: "let",
      },
      {
        question: "What is the initial value of a declared variable?",
        options: ["null", "0", "undefined", "NaN"],
        answer: "undefined",
      },
    ],
    "data types": [
      {
        question: "Which of the following is not a JavaScript data type?",
        options: ["String", "Number", "Float", "Boolean"],
        answer: "Float",
      },
      {
        question: "typeof null returns?",
        options: ["null", "object", "undefined", "NaN"],
        answer: "object",
      },
      {
        question: "Which is a non-primitive data type?",
        options: ["String", "Number", "Object", "Boolean"],
        answer: "Object",
      },
      {
        question: "What is the result of typeof NaN?",
        options: ["NaN", "undefined", "number", "object"],
        answer: "number",
      },
      {
        question: "Which symbol type is used to create unique identifiers?",
        options: ["Symbol", "ID", "Unique", "Hash"],
        answer: "Symbol",
      },
      {
        question: "Which of these is falsy?",
        options: ["0", "null", "undefined", "All of these"],
        answer: "All of these",
      },
      {
        question: "What does typeof undefined return?",
        options: ["undefined", "null", "object", "string"],
        answer: "undefined",
      },
      {
        question: "Which is a valid way to declare a string?",
        options: ["'text'", '"text"', "`text`", "All of these"],
        answer: "All of these",
      },
      {
        question: "Boolean(0) returns?",
        options: ["true", "false", "error", "NaN"],
        answer: "false",
      },
      {
        question: "What is the typeof []?",
        options: ["array", "object", "list", "undefined"],
        answer: "object",
      },
    ],
    operators: [
      {
        question: "Which of the following is an assignment operator?",
        options: ["+", "-", "*", "="],
        answer: "=",
      },
      {
        question: "Which operator checks value and type both?",
        options: ["==", "===", "!=", "="],
        answer: "===",
      },
      {
        question: "Which operator is used for exponentiation?",
        options: ["^", "**", "exp", "++"],
        answer: "**",
      },
      {
        question: "What is the result of '5' + 2?",
        options: ["7", "52", "Error", "undefined"],
        answer: "52",
      },
      {
        question: "What does '!=='' mean?",
        options: ["Not equal", "Strict not equal", "Loose not equal", "None"],
        answer: "Strict not equal",
      },
      {
        question: "What is the result of true && false?",
        options: ["true", "false", "undefined", "null"],
        answer: "false",
      },
      {
        question: "Which operator returns true if either condition is true?",
        options: ["&&", "||", "!", "&"],
        answer: "||",
      },
      {
        question: "What is the value of !true?",
        options: ["true", "false", "0", "undefined"],
        answer: "false",
      },
      {
        question: "What does typeof NaN return?",
        options: ["NaN", "undefined", "number", "object"],
        answer: "number",
      },
      {
        question: "Which operator is used to compare reference types?",
        options: ["===", "==", "Object.is", "All of these"],
        answer: "All of these",
      },

    ],

    "arrow functions": [
  {
    question: "Which syntax correctly defines an arrow function?",
    options: ["() => {}", "=> () {}", "function => ()", "() -> {}"],
    answer: "() => {}",
  },
  {
    question: "Arrow functions are best used for:",
    options: ["Constructors", "Object methods", "Short callbacks", "Class declarations"],
    answer: "Short callbacks",
  },
  {
    question: "Arrow functions do not have their own:",
    options: ["this", "return", "name", "scope"],
    answer: "this",
  },
  {
    question: "What will `() => 5` return?",
    options: ["undefined", "null", "5", "error"],
    answer: "5",
  },
  {
    question: "Arrow functions are introduced in which version of JS?",
    options: ["ES5", "ES6", "ES7", "ES3"],
    answer: "ES6",
  },
  {
    question: "Which of the following is NOT a valid arrow function?",
    options: [
      "() => console.log('Hello')",
      "(a, b) => a + b",
      "(x) => { return x * x }",
      "x, y => x + y"
    ],
    answer: "x, y => x + y",
  },
  {
    question: "Do arrow functions have a `prototype` property?",
    options: ["Yes", "Only for objects", "No", "Only for arrays"],
    answer: "No",
  },
  {
    question: "Can arrow functions be used as constructors?",
    options: ["Yes", "Only in strict mode", "No", "Only for classes"],
    answer: "No",
  },
  {
    question: "Arrow functions are always:",
    options: ["Hoisted", "Anonymous", "Synchronous", "Block scoped"],
    answer: "Anonymous",
  },
  {
    question: "Which will correctly return the square of a number?",
    options: [
      "n => n ** 2",
      "function(n) => return n * n",
      "n => return n * n",
      "return n => n * n"
    ],
    answer: "n => n ** 2",
  }
],

    

"event listeners": [
  {
    question: "Which method is used to attach an event?",
    options: ["addEvent()", "attach()", "addEventListener()", "onClick()"],
    answer: "addEventListener()",
  },
  {
    question: "What does `e.preventDefault()` do?",
    options: [
      "Stops event bubbling",
      "Prevents default browser behavior",
      "Stops script execution",
      "Reloads the page"
    ],
    answer: "Prevents default browser behavior",
  },
  {
    question: "What type of function is used in `addEventListener`?",
    options: ["Constructor", "Callback", "Arrow", "Async"],
    answer: "Callback",
  },
  {
    question: "Which event fires when a button is clicked?",
    options: ["mouseover", "submit", "click", "keydown"],
    answer: "click",
  },
  {
    question: "What does the third parameter in addEventListener() do?",
    options: [
      "Delays event",
      "Specifies capture phase",
      "Specifies delay",
      "Sets priority"
    ],
    answer: "Specifies capture phase",
  },
  {
    question: "To remove an event listener, you use:",
    options: [
      "removeEvent()",
      "detachEventListener()",
      "removeEventListener()",
      "stopEvent()"
    ],
    answer: "removeEventListener()",
  },
  {
    question: "Which event triggers when an input loses focus?",
    options: ["focus", "input", "blur", "keydown"],
    answer: "blur",
  },
  {
    question: "Can a single element have multiple listeners for the same event?",
    options: ["Yes", "No", "Only once", "Only on body"],
    answer: "Yes",
  },
  {
    question: "Which method can be used to trigger a click programmatically?",
    options: ["triggerClick()", "click()", "simulateClick()", "fireClick()"],
    answer: "click()",
  },
  {
    question: "What is the default phase of event execution?",
    options: ["Capturing", "Targeting", "Bubbling", "Async"],
    answer: "Bubbling",
  }
]

  };
  
  let currentQuestion = 0;
let score = 0;
let selectedConcept = "";
let quizData = [];
let timer;
let timeLeft = 10;

const conceptForm = document.getElementById("conceptForm");
const conceptInput = document.getElementById("conceptSelect");
const questionBox = document.getElementById("questionBox");
const optionsBox = document.getElementById("optionsBox");
const nextBtn = document.getElementById("nextBtn");
const scoreBox = document.getElementById("scoreBox");
const restartBtn = document.getElementById("restartBtn");
const timerBox = document.getElementById("timer");
const timeDisplay = document.getElementById("time");

conceptForm.addEventListener("submit", (e) => {
  e.preventDefault();
  selectedConcept = conceptInput.value.trim().toLowerCase();
  if (questionsDB[selectedConcept]) {
    quizData = shuffleArray(questionsDB[selectedConcept]).slice(0, 5); // limit to 5 random
    currentQuestion = 0;
    score = 0;
    conceptForm.classList.add("hide");
    nextBtn.classList.remove("hide");
    questionBox.classList.remove("hide");
    scoreBox.classList.add("hide");
    restartBtn.classList.add("hide");
    timerBox.classList.remove("hide");
    loadQuestion();
  } else {
    alert("❌ Concept not found. Try: variables, data types, operators, functions, or objects.");
  }
});

function loadQuestion() {
  resetTimer();
  const q = quizData[currentQuestion];
  questionBox.innerText = `Q${currentQuestion + 1}. ${q.question}`;
  optionsBox.innerHTML = "";

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.classList.add("option-btn");
    btn.addEventListener("click", () => checkAnswer(btn, q.answer));
    optionsBox.appendChild(btn);
  });

  startTimer();
}

function checkAnswer(selectedBtn, correctAns) {
  clearInterval(timer);
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach((btn) => {
    btn.disabled = true;
    if (btn.innerText === correctAns) {
      btn.style.backgroundColor = "green";
    }
  });

  if (selectedBtn.innerText === correctAns) {
    score++;
  } else {
    selectedBtn.style.backgroundColor = "red";
  }
}

nextBtn.addEventListener("click", () => {
  clearInterval(timer);
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionBox.classList.add("hide");
  optionsBox.innerHTML = "";
  nextBtn.classList.add("hide");
  timerBox.classList.add("hide");
  scoreBox.classList.remove("hide");
  scoreBox.innerHTML = `✅ You scored <strong>${score}</strong> out of <strong>${quizData.length}</strong>`;
  restartBtn.classList.remove("hide");
}

restartBtn.addEventListener("click", () => {
  window.location.reload();
});

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function startTimer() {
  timeLeft = 10;
  timeDisplay.innerText = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timeDisplay.innerText = timeLeft;

    if (timeLeft <= 3) {
      timeDisplay.style.color = "red";
    } else {
      timeDisplay.style.color = "black";
    }

    if (timeLeft === 0) {
      clearInterval(timer);
      autoSelectCorrectAnswer();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 10;
  timeDisplay.innerText = timeLeft;
  timeDisplay.style.color = "black";
}

function autoSelectCorrectAnswer() {
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach((btn) => {
    btn.disabled = true;
    if (btn.innerText === quizData[currentQuestion].answer) {
      btn.style.backgroundColor = "green";
    }
  });
}