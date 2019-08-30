let questions = [
  {
    question: "Which has the lowest atomic number?",
    answerType: "name",
    fill: "NA"
  },
  {
    question: "Which has the highest atomic number?",
    answerType: "name",
    fill: "NA"
  },
  {
    question: "Which element has the symbol of _?",
    answerType: "name",
    fill: "symbol"
  },
  {
    question: "Which is the symbol of _?",
    answerType: "symbol",
    fill: "name"
  },
  {
    question: "Which has the greatest atomic mass?",
    answerType: "name",
    fill: "NA"
  },
  {
    question: "Which has the least atomic mass?",
    answerType: "name",
    fill: "NA"
  },
  {
    question: "Which has the greatest electronegativity?",
    answerType: "name",
    fill: "NA"
  },
  {
    question: "Which has the least electronegativity?",
    answerType: "name",
    fill: "NA"
  }
];

function selectQuestion() {
  let question = questions[Math.floor(Math.random() * questions.length)];
  let temp = question.question.split("_");
  let element = table[Math.floor(Math.random() * 118)];

  switch (question.fill) {
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
      return "selectQuestion() question.fill switch failed";
  }
  $("#question").text(question.question);
  selectAnswers(question.answerType);
  return question;
}

function selectAnswers(answerType) {
  let answers = ["", "", "", ""];
  for (let i = 0; i < 4; i++) {
    do {
      let answer = "";
      let element = table[Math.floor(Math.random() * 118)];
      switch (answerType) {
        case "name":
          answer = element.name;
          break;
        case "symbol":
          answer = element.symbol;
          break;
        default:
          //   alert("answerType switch unexpected > function selectAnswers()");
          break;
      }
      if (!answers.includes(answer)) answers[i] = answer;
    } while (answers[i] === "");

    let input = "#answerChoice" + (i + 1);
    let label = "#answerChoiceLabel" + (i + 1);
    $(input).attr("value", answers[i]);
    $(label).text(answers[i]);
  }
}

$(".answerChoices").on("click", function() {});

selectQuestion();
