//Global Variables
let correct = "";
let answeredCorrectly = 0;
let answeredIncorrectly = 0;

function loadQuestion() {
  // Select Question
  let question = questions[Math.floor(Math.random() * questions.length)];

  // Select Answer Choices
  let answerChoices = [];
  do {
    let element = table[Math.floor(Math.random() * table.length)];
    if (!answerChoices.includes(element)) answerChoices.push(element);
  } while (answerChoices.length < 4);

  // Select Correct Answer
  let correctSlot = Math.floor(Math.random() * 4);

  // Display Question
  $("#question").text(question.replace("ELEMENT", answerChoices[correctSlot].name));

  // Determine which question was asked
  if (question.includes("atomic number")) {
    // Display Answer Choices
    $("#answerChoiceLabel1").text(answerChoices[0].atomicNumber);
    $("#answerChoice1").attr("value", answerChoices[0].atomicNumber);
    $("#answerChoiceLabel2").text(answerChoices[1].atomicNumber);
    $("#answerChoice2").attr("value", answerChoices[1].atomicNumber);
    $("#answerChoiceLabel3").text(answerChoices[2].atomicNumber);
    $("#answerChoice3").attr("value", answerChoices[2].atomicNumber);
    $("#answerChoiceLabel4").text(answerChoices[3].atomicNumber);
    $("#answerChoice4").attr("value", answerChoices[3].atomicNumber);

    // Set correct
    correct = answerChoices[correctSlot].atomicNumber.toString();
  } else if (question.includes("symbol")) {
    // Display Answer Choices
    $("#answerChoiceLabel1").text(answerChoices[0].symbol);
    $("#answerChoice1").attr("value", answerChoices[0].symbol);
    $("#answerChoiceLabel2").text(answerChoices[1].symbol);
    $("#answerChoice2").attr("value", answerChoices[1].symbol);
    $("#answerChoiceLabel3").text(answerChoices[2].symbol);
    $("#answerChoice3").attr("value", answerChoices[2].symbol);
    $("#answerChoiceLabel4").text(answerChoices[3].symbol);
    $("#answerChoice4").attr("value", answerChoices[3].symbol);

    // Set correct
    correct = answerChoices[correctSlot].symbol;
  }
  console.log("correct:  " + correct);

  // Set Timer
  // let remainingTicks = 100;
  // $("#time").css("width", "100%");
  // let timer = setInterval(() => {
  //   remainingTicks -= 1;
  //   $("#time").css("width", remainingTicks + "%");

  //   if (remainingTicks === 0) {
  //     questionEnded(false);
  //   }
  // }, 200);
}

$("#form").submit((e) => {
  e.preventDefault();

  console.log("answered: " + $("input[name='answerChoice']:checked").val());

  if ($("input[name='answerChoice']:checked").val() === correct) {
    questionEnded(true);
  } else {
    questionEnded(false);
  }
});

function questionEnded(correctness) {
  console.log(correctness);
  if (correctness) {
    answeredCorrectly += 1;
    alert("CORRECT!");
  } else {
    answeredIncorrectly += 1;
    alert("WRONG!sxdfcgvbhxsdfc gvhb");
  }

  if (answeredCorrectly + answeredIncorrectly === 5) {
    alert("GAME OVER\nCorrect: " + answeredCorrectly + "\nIncorrect: " + answeredIncorrectly);
  } else loadQuestion();
}

loadQuestion();
