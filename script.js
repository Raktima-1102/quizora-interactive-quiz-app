/* ========================================
   QUIZORA — INTERACTIVE QUIZ APPLICATION
   Main JavaScript
======================================== */

const $ = (selector) => document.querySelector(selector);

const pages = {
  home: $("#homePage"),
  create: $("#createPage"),
  play: $("#playPage"),
  result: $("#resultPage")
};

const defaultQuizzes = [
  {
    id: "tech-1",
    title: "JavaScript Essentials",
    category: "Technology",
    description: "Test your knowledge of the language that powers the web.",
    emoji: "💻",
    questions: [
      {
        text: "Which keyword declares a variable that can be reassigned?",
        options: ["const", "let", "static", "fixed"],
        answer: 1,
        explanation: "The let keyword declares a block-scoped variable that can be reassigned."
      },
      {
        text: "Which method converts JSON text into a JavaScript object?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
        answer: 1,
        explanation: "JSON.parse() parses JSON text and returns the corresponding JavaScript value."
      },
      {
        text: "Which symbol is used for strict equality?",
        options: ["==", "=", "===", "!="],
        answer: 2,
        explanation: "The === operator compares values without performing type conversion."
      },
      {
        text: "Which array method adds an item to the end?",
        options: ["shift()", "pop()", "push()", "slice()"],
        answer: 2,
        explanation: "push() adds one or more elements to the end of an array."
      },
      {
        text: "Which keyword defines a function that can pause and resume?",
        options: ["yield", "async", "await", "defer"],
        answer: 0,
        explanation: "The yield keyword pauses a generator function and can return a value."
      }
    ]
  },
  {
    id: "science-1",
    title: "The Science Lab",
    category: "Science",
    description: "Explore fascinating facts about our natural world.",
    emoji: "🔬",
    questions: [
      {
        text: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Mercury"],
        answer: 1,
        explanation: "Mars appears reddish because of iron oxide on its surface."
      },
      {
        text: "What is the chemical symbol for water?",
        options: ["CO2", "O2", "H2O", "NaCl"],
        answer: 2,
        explanation: "A water molecule contains two hydrogen atoms and one oxygen atom."
      },
      {
        text: "What force keeps planets in orbit around the Sun?",
        options: ["Friction", "Magnetism", "Gravity", "Electricity"],
        answer: 2,
        explanation: "Gravity holds planets in their orbits around the Sun."
      },
      {
        text: "Which gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        answer: 1,
        explanation: "Plants use carbon dioxide, water, and light to produce sugars."
      },
      {
        text: "What is the center of an atom called?",
        options: ["Electron", "Shell", "Nucleus", "Photon"],
        answer: 2,
        explanation: "The nucleus contains protons and usually neutrons."
      }
    ]
  },
  {
    id: "design-1",
    title: "Design Fundamentals",
    category: "Design",
    description: "Discover the principles behind beautiful visual design.",
    emoji: "🎨",
    questions: [
      {
        text: "Which principle helps create visual importance and order?",
        options: ["Hierarchy", "Distortion", "Randomness", "Duplication"],
        answer: 0,
        explanation: "Visual hierarchy guides attention toward the most important elements."
      },
      {
        text: "What does RGB stand for?",
        options: [
          "Red, Grey, Blue",
          "Red, Green, Blue",
          "Rose, Green, Black",
          "Red, Gold, Brown"
        ],
        answer: 1,
        explanation: "RGB is an additive color model used by screens."
      },
      {
        text: "Which format is commonly used for scalable vector graphics?",
        options: ["JPG", "BMP", "SVG", "GIF"],
        answer: 2,
        explanation: "SVG graphics can scale without losing their sharpness."
      },
      {
        text: "What is whitespace in design?",
        options: [
          "Only white-colored text",
          "Empty space around design elements",
          "A printing error",
          "A type of font"
        ],
        answer: 1,
        explanation: "Whitespace creates breathing room and helps organize content."
      },
      {
        text: "Which principle describes the visual weight of elements?",
        options: ["Balance", "Compression", "Resolution", "Opacity"],
        answer: 0,
        explanation: "Balance distributes visual weight to create a stable composition."
      }
    ]
  },
  {
    id: "general-1",
    title: "General Knowledge",
    category: "General",
    description: "A little bit of everything to challenge your brain.",
    emoji: "🌍",
    questions: [
      {
        text: "What is the capital of Japan?",
        options: ["Kyoto", "Osaka", "Tokyo", "Nagoya"],
        answer: 2,
        explanation: "Tokyo is the capital of Japan."
      },
      {
        text: "How many sides does a hexagon have?",
        options: ["Five", "Six", "Seven", "Eight"],
        answer: 1,
        explanation: "A hexagon has six sides."
      },
      {
        text: "Which is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: 3,
        explanation: "The Pacific Ocean is the largest ocean on Earth."
      },
      {
        text: "Which language is primarily used to style web pages?",
        options: ["HTML", "CSS", "SQL", "Python"],
        answer: 1,
        explanation: "CSS controls the presentation and layout of web pages."
      },
      {
        text: "How many days are there in a standard non-leap year?",
        options: ["364", "365", "366", "360"],
        answer: 1,
        explanation: "A standard year contains 365 days."
      }
    ]
  },
  {
    id: "tech-2",
    title: "Web Development Basics",
    category: "Technology",
    description: "Learn about the building blocks of websites.",
    emoji: "🌐",
    questions: [
      {
        text: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "HyperTool Multi Language",
          "HomeText Markup Language"
        ],
        answer: 0,
        explanation: "HTML stands for HyperText Markup Language."
      },
      {
        text: "Which HTML element creates a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: 1,
        explanation: "The a element creates a hyperlink using its href attribute."
      },
      {
        text: "Which CSS property changes text color?",
        options: ["font-style", "background", "color", "text-weight"],
        answer: 2,
        explanation: "The color property sets the foreground color of text."
      },
      {
        text: "Which protocol is commonly used to transfer web pages?",
        options: ["HTTP", "FTP only", "SMTP", "SSH only"],
        answer: 0,
        explanation: "HTTP is a protocol used for transferring web resources."
      },
      {
        text: "What does responsive web design help a website do?",
        options: [
          "Load without internet",
          "Adapt to different screen sizes",
          "Remove all images",
          "Replace HTML"
        ],
        answer: 1,
        explanation: "Responsive design adapts layouts to phones, tablets, and desktops."
      }
    ]
  },
  {
    id: "science-2",
    title: "Space & Astronomy",
    category: "Science",
    description: "Travel through the universe with these space questions.",
    emoji: "🚀",
    questions: [
      {
        text: "What is the closest star to Earth?",
        options: ["Sirius", "The Sun", "Polaris", "Proxima Centauri"],
        answer: 1,
        explanation: "The Sun is Earth's closest star."
      },
      {
        text: "Which planet is famous for its prominent ring system?",
        options: ["Mars", "Venus", "Saturn", "Mercury"],
        answer: 2,
        explanation: "Saturn has a spectacular system of rings made mainly of ice and rocky particles."
      },
      {
        text: "What is the name of our galaxy?",
        options: ["Andromeda", "Whirlpool", "Milky Way", "Sombrero"],
        answer: 2,
        explanation: "Our solar system is part of the Milky Way galaxy."
      },
      {
        text: "What do astronauts wear to protect themselves in space?",
        options: ["Raincoats", "Space suits", "Lab coats", "Wetsuits"],
        answer: 1,
        explanation: "Space suits help provide pressure, oxygen, and thermal protection."
      },
      {
        text: "What is Earth's natural satellite?",
        options: ["The Moon", "The Sun", "Mars", "Titan"],
        answer: 0,
        explanation: "The Moon is Earth's natural satellite."
      }
    ]
  }
];

const STORAGE_KEYS = {
  customQuizzes: "quizora_custom_quizzes",
  profile: "quizora_profile",
  history: "quizora_quiz_history"
};

let customQuizzes = loadStorage(STORAGE_KEYS.customQuizzes, []);
let quizzes = [...defaultQuizzes, ...customQuizzes];
let selectedCategory = "All";
let currentQuiz = null;
let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;
let answersChecked = false;
let timeLeft = 20;
let timerInterval = null;
let lastResult = null;
let questionNumber = 0;
let userProfile = loadStorage(STORAGE_KEYS.profile, null);

function loadStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch (error) {
    console.warn("Unable to read saved data:", error);
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn("Unable to save data:", error);
    return false;
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return entities[character];
  });
}

/* Navigation */

function stopTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function showPage(pageName) {
  stopTimer();

  Object.values(pages).forEach((page) => page.classList.add("hidden"));
  pages[pageName].classList.remove("hidden");

  document.querySelectorAll(".nav-link").forEach((button) => {
    button.classList.remove("active");
  });

  if (pageName === "home") {
    document.querySelectorAll(".nav-link")[0].classList.add("active");
  } else if (pageName === "create") {
    document.querySelectorAll(".nav-link")[1].classList.add("active");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToQuizzes() {
  showPage("home");
  $("#quizSection").scrollIntoView({ behavior: "smooth" });
}

function goHome() {
  if (currentQuiz && !pages.play.classList.contains("hidden")) {
    const shouldLeave = window.confirm("Leave this quiz? Your current progress will be lost.");
    if (!shouldLeave) return;
  }
  showPage("home");
}

/* Quiz library */

function renderQuizzes() {
  quizzes = [...defaultQuizzes, ...customQuizzes];

  const filtered = selectedCategory === "All"
    ? quizzes
    : quizzes.filter((quiz) => quiz.category === selectedCategory);

  $("#quizGrid").innerHTML = filtered.map((quiz) => `
    <article class="quiz-card">
      <div class="quiz-card-top">
        <span class="quiz-emoji" aria-hidden="true">${escapeHTML(quiz.emoji || "📝")}</span>
        <span class="category-label">${escapeHTML(quiz.category)}</span>
      </div>
      <h3>${escapeHTML(quiz.title)}</h3>
      <p>${escapeHTML(quiz.description)}</p>
      <div class="quiz-meta">
        <span>❓ ${quiz.questions.length} questions</span>
        <span>⏱ 20 sec/question</span>
      </div>
      <button class="primary-button" data-start-quiz="${escapeHTML(quiz.id)}">
        Start quiz →
      </button>
    </article>
  `).join("");

  $("#quizCount").textContent = quizzes.length;
  $("#quizCountLabel").textContent =
    `${filtered.length} ${filtered.length === 1 ? "quiz" : "quizzes"}`;

  $("#emptyMessage").classList.toggle("hidden", filtered.length !== 0);
}

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;

    document.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.classList.toggle("selected", chip === button);
    });

    renderQuizzes();
  });
});

$("#quizGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-start-quiz]");
  if (!button) return;

  const quiz = quizzes.find((item) => item.id === button.dataset.startQuiz);
  if (quiz) startQuiz(quiz);
});

/* Quiz play and scoring */

function startQuiz(quiz) {
  stopTimer();

  currentQuiz = quiz;
  currentQuestionIndex = 0;
  selectedAnswer = null;
  score = 0;
  answersChecked = false;
  lastResult = null;

  showPage("play");
  renderQuestion();
}

function renderQuestion() {
  stopTimer();

  if (!currentQuiz || currentQuestionIndex >= currentQuiz.questions.length) {
    finishQuiz();
    return;
  }

  const question = currentQuiz.questions[currentQuestionIndex];

  selectedAnswer = null;
  answersChecked = false;
  timeLeft = 20;

  $("#playCategory").textContent = currentQuiz.category;
  $("#questionCounter").textContent =
    `Question ${currentQuestionIndex + 1} of ${currentQuiz.questions.length}`;
  $("#questionText").textContent = question.text;
  $("#progressBar").style.width =
    `${(currentQuestionIndex / currentQuiz.questions.length) * 100}%`;
  $("#timer").textContent = `⏱ ${timeLeft}s`;
  $("#timer").classList.remove("timer-warning");
  $("#feedback").textContent = "";
  $("#feedback").className = "feedback";

  $("#answerOptions").innerHTML = question.options.map((option, index) => `
    <button type="button" class="answer-option" data-answer="${index}">
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span>${escapeHTML(option)}</span>
    </button>
  `).join("");

  $("#checkButton").disabled = true;
  $("#checkButton").textContent = "Check answer";

  startTimer();
}

function startTimer() {
  stopTimer();

  timerInterval = setInterval(() => {
    timeLeft -= 1;
    $("#timer").textContent = `⏱ ${timeLeft}s`;

    if (timeLeft <= 5) {
      $("#timer").classList.add("timer-warning");
    }

    if (timeLeft <= 0) {
      stopTimer();

      if (!answersChecked) {
        checkAnswer(true);
      }
    }
  }, 1000);
}

$("#answerOptions").addEventListener("click", (event) => {
  const option = event.target.closest("[data-answer]");

  if (!option || answersChecked) return;

  selectedAnswer = Number(option.dataset.answer);

  document.querySelectorAll(".answer-option").forEach((button) => {
    button.classList.toggle("selected", button === option);
  });

  $("#checkButton").disabled = false;
});

$("#checkButton").addEventListener("click", () => {
  if (!currentQuiz) return;

  if (!answersChecked) {
    checkAnswer(false);
  } else {
    currentQuestionIndex += 1;
    renderQuestion();
  }
});

function checkAnswer(timedOut = false) {
  if (answersChecked || !currentQuiz) return;

  answersChecked = true;
  stopTimer();

  const question = currentQuiz.questions[currentQuestionIndex];
  const correct = selectedAnswer === question.answer;

  if (correct) score += 1;

  document.querySelectorAll(".answer-option").forEach((button) => {
    const answerIndex = Number(button.dataset.answer);
    button.disabled = true;

    if (answerIndex === question.answer) {
      button.classList.add("correct");
    } else if (answerIndex === selectedAnswer && !correct) {
      button.classList.add("incorrect");
    }
  });

  const feedback = $("#feedback");

  if (timedOut && selectedAnswer === null) {
    feedback.textContent = `Time's up! ${question.explanation}`;
    feedback.classList.add("incorrect-feedback");
  } else if (correct) {
    feedback.textContent = `Correct! ${question.explanation}`;
    feedback.classList.add("correct-feedback");
  } else {
    feedback.textContent = `Not quite. ${question.explanation}`;
    feedback.classList.add("incorrect-feedback");
  }

  $("#progressBar").style.width =
    `${((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100}%`;

  $("#checkButton").disabled = false;
  $("#checkButton").textContent =
    currentQuestionIndex === currentQuiz.questions.length - 1
      ? "See results →"
      : "Next question →";
}

/* Results and quiz history */

function finishQuiz() {
  stopTimer();

  const total = currentQuiz.questions.length;
  const percentage = Math.round((score / total) * 100);

  lastResult = {
    quizId: currentQuiz.id,
    title: currentQuiz.title,
    score,
    total,
    percentage,
    date: new Date().toISOString()
  };

  const history = loadStorage(STORAGE_KEYS.history, []);
  history.push(lastResult);
  saveStorage(STORAGE_KEYS.history, history.slice(-100));

  $("#finalScore").textContent = `${score}/${total}`;
  $("#percentageText").textContent = `${percentage}% accuracy`;

  if (percentage === 100) {
    $("#resultIcon").textContent = "🏆";
    $("#resultTitle").textContent = "Perfect score!";
    $("#resultMessage").textContent = "Amazing! You got every question right.";
  } else if (percentage >= 60) {
    $("#resultIcon").textContent = "🎉";
    $("#resultTitle").textContent = "Great job!";
    $("#resultMessage").textContent = "You're doing well. Keep building your knowledge!";
  } else {
    $("#resultIcon").textContent = "🌱";
    $("#resultTitle").textContent = "Keep growing!";
    $("#resultMessage").textContent = "Every attempt is a chance to learn something new.";
  }

  showPage("result");
}

function retryQuiz() {
  if (currentQuiz) startQuiz(currentQuiz);
}

/* Custom quiz creation */

function addQuestionBlock() {
  questionNumber += 1;

  const number = questionNumber;
  const block = document.createElement("div");
  block.className = "question-builder";
  block.dataset.questionBlock = String(number);

  block.innerHTML = `
    <button type="button" class="remove-question" data-remove-question="${number}">
      Remove
    </button>
    <h3>Question ${number}</h3>
    <label for="question-${number}">Question text</label>
    <input id="question-${number}" name="question-${number}"
      maxlength="240" placeholder="Write your question" required>

    <label for="option-${number}-0">Option A</label>
    <input id="option-${number}-0" name="option-${number}-0"
      maxlength="120" placeholder="First answer choice" required>

    <label for="option-${number}-1">Option B</label>
    <input id="option-${number}-1" name="option-${number}-1"
      maxlength="120" placeholder="Second answer choice" required>

    <label for="option-${number}-2">Option C</label>
    <input id="option-${number}-2" name="option-${number}-2"
      maxlength="120" placeholder="Third answer choice" required>

    <label for="option-${number}-3">Option D</label>
    <input id="option-${number}-3" name="option-${number}-3"
      maxlength="120" placeholder="Fourth answer choice" required>

    <label class="correct-answer-label" for="correct-${number}">
      Correct answer
    </label>
    <select id="correct-${number}" name="correct-${number}" required>
      <option value="0">Option A</option>
      <option value="1">Option B</option>
      <option value="2">Option C</option>
      <option value="3">Option D</option>
    </select>

    <label for="explanation-${number}">Explanation (optional)</label>
    <input id="explanation-${number}" name="explanation-${number}"
      maxlength="240" placeholder="Explain why the answer is correct">
  `;

  $("#questionBuilder").appendChild(block);
}

$("#addQuestionButton").addEventListener("click", () => {
  const blocks = $("#questionBuilder").querySelectorAll(".question-builder");

  if (blocks.length >= 10) {
    alert("A quiz can have a maximum of 10 questions.");
    return;
  }

  addQuestionBlock();
});

$("#questionBuilder").addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-question]");
  if (!button) return;

  const blocks = $("#questionBuilder").querySelectorAll(".question-builder");

  if (blocks.length <= 1) {
    alert("Keep at least one question in your quiz.");
    return;
  }

  button.closest(".question-builder").remove();
});

$("#createQuizForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;

  if (!form.reportValidity()) return;

  const blocks = [...$("#questionBuilder").querySelectorAll(".question-builder")];

  if (blocks.length === 0) {
    alert("Add at least one question.");
    return;
  }

  const questions = blocks.map((block) => {
    const inputs = block.querySelectorAll("input");
    const correctSelect = block.querySelector("select[name^='correct-']");

    return {
      text: inputs[0].value.trim(),
      options: [
        inputs[1].value.trim(),
        inputs[2].value.trim(),
        inputs[3].value.trim(),
        inputs[4].value.trim()
      ],
      answer: Number(correctSelect.value),
      explanation: inputs[5].value.trim() || "Keep practicing to master this topic."
    };
  });

  const title = $("#quizTitle").value.trim();
  const description = $("#quizDescription").value.trim();

  if (!title || !description || questions.some((question) =>
    !question.text || question.options.some((option) => !option)
  )) {
    alert("Please complete all required quiz fields.");
    return;
  }

  const quiz = {
    id: `custom-${Date.now()}`,
    title,
    category: $("#quizCategory").value,
    description,
    emoji: "📝",
    questions
  };

  customQuizzes.push(quiz);

  if (!saveStorage(STORAGE_KEYS.customQuizzes, customQuizzes)) {
    customQuizzes.pop();
    alert("Could not save the quiz. Check your browser storage settings.");
    return;
  }

  selectedCategory = "All";
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("selected", chip.dataset.category === "All");
  });

  form.reset();
  $("#questionBuilder").innerHTML = "";
  questionNumber = 0;
  addQuestionBlock();

  renderQuizzes();
  showPage("home");
  $("#quizSection").scrollIntoView({ behavior: "smooth" });

  alert("Your quiz has been published!");
});

/* Demo profile */

function openProfile() {
  $("#profileDialog").showModal();
}

function closeProfile() {
  $("#profileDialog").close();
}

$("#profileForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = $("#userName").value.trim();
  const email = $("#userEmail").value.trim();

  if (!name || !email) return;

  userProfile = { name, email };

  if (!saveStorage(STORAGE_KEYS.profile, userProfile)) {
    alert("Unable to save your profile in this browser.");
    return;
  }

  updateProfileButton();
  closeProfile();
});

function updateProfileButton() {
  const button = $("#profileButton");

  if (userProfile && userProfile.name) {
    button.textContent = userProfile.name.split(/\s+/)[0];
    button.title = "Your local demo profile";
  } else {
    button.textContent = "Sign In";
    button.title = "Create a demo profile";
  }
}

/* Initialize the application */

function initializeApp() {
  renderQuizzes();
  addQuestionBlock();
  updateProfileButton();
}

initializeApp();
