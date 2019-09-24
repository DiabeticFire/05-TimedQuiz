let questions = [
  {
    question: "Which has the lowest atomic number?",
    questionType: "min",
    answerType: "name",
    fill: "NA",
    answerdata: "atomicNumber",
    answer: ""
  },
  {
    question: "Which has the highest atomic number?",
    questionType: "max",
    answerType: "name",
    answerdata: "atomicNumber",
    fill: "NA",
    answer: ""
  },
  {
    question: "Which element has the symbol of _?",
    questionType: "match",
    answerType: "name",
    answerdata: "name",
    fill: "symbol",
    answer: ""
  },
  {
    question: "Which is the symbol of _?",
    questionType: "match",
    answerType: "symbol",
    answerdata: "symbol",
    fill: "name",
    answer: ""
  },
  {
    question: "Which has the greatest atomic mass?",
    questionType: "max",
    answerType: "name",
    answerdata: "atomicMass",
    fill: "NA",
    answer: ""
  },
  {
    question: "Which has the least atomic mass?",
    questionType: "min",
    answerType: "name",
    answerdata: "atomicMass",
    fill: "NA",
    answer: ""
  },
  {
    question: "Which has the greatest electronegativity?",
    questionType: "max",
    answerType: "name",
    answerdata: "electronegativity",
    fill: "NA",
    answer: ""
  },
  {
    question: "Which has the least electronegativity?",
    questionType: "min",
    answerType: "name",
    answerdata: "electronegativity",
    fill: "NA",
    answer: ""
  }
];

function selectQuestion() {
  // Local Variables
  let q = questions[Math.floor(Math.random() * questions.length)];
  let question = q.question;
  let temp = question.split("_");
  let element = table[Math.floor(Math.random() * 118)];

  // Get the question displayed to the user
  switch (q.fill) {
    case "NA":
      // Nothing to do here
      break;
    case "symbol":
      let symbol = element.symbol;
      question = temp[0] + symbol + temp[1];
      break;
    case "name":
      let name = element.name;
      question = temp[0] + name + temp[1];
      break;
    default:
      alert("q.fill switch unexpected > function selectQuestion()");
      break;
  }
  $("#question").text(question);

  // Determine the answer
  switch (q.answerType) {
    case "max":
      break;
    case "min":
      break;
    case "match":
      break;
    default:
      break;
  }

  // Display answer choices
  selectAnswers(q.answerType);
}

function selectAnswers(answerType) {
  let answers = ["", "", "", ""];
  do {
    for (let i = 0; i < 4; i++) {
      do {
        let property = "";
        let element = table[Math.floor(Math.random() * 118)];
        switch (answerType) {
          case "name":
            property = element.name;
            break;
          case "symbol":
            property = element.symbol;
            break;
          default:
            alert("answerType switch unexpected > function selectAnswers()");
            break;
        }
        if (!answers.includes(property)) answers[i] = property;
      } while (answers[i] === "");
      $("#answerChoices").append(
        $("<div>")
          .text(answers[i])
          .attr("class", "answerChoices")
      );
    }
  } while (!questionSolvable());
}

function questionSolvable() {}

$(".answerChoices").on("click", function() {});

function startTimer() {
  let timer = setInterval(function() {
    $("#time").css("width", "3%");
  }, 100);
}

selectQuestion();

array.forEach(element, function() {});
