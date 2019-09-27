//Global Variables
let correct = "";

function loadQuestion() {
  // Select Question
  let question = questions[Math.floor(Math.random() * questions.length)];
  console.log(question);

  // Select Answer Choices
  let answerChoices = [];
  do {
    let element = table[Math.floor(Math.random() * table.length)];
    if (!answerChoices.includes(element)) answerChoices.push(element);
  } while (answerChoices.length < 4);
  console.log(answerChoices);

  // Select Correct Answer
  let correctSlot = Math.floor(Math.random() * 4);

  // Display Question
  $("#question").text(
    question.replace("ELEMENT", answerChoices[correctSlot].name)
  );

  // Determine which question was asked
  if (question.includes("atomic number")) {
    // Display Answer Choices
    $("#answerChoiceLabel1").text(answerChoices[0].atomicNumber);
    $("#answerChoice1").attr("value", answerChoices[0].atomicNumber);
    $("#answerChoiceLabel2").text(answerChoices[1].atomicNumber);
    $("#answerChoice2").attr("value", answerChoices[1].atomicNumber);
    $("#answerChoiceLabel3").text(answerChoices[2].atomicNumber);
    $("#answerChoice2").attr("value", answerChoices[2].atomicNumber);
    $("#answerChoiceLabel4").text(answerChoices[3].atomicNumber);
    $("#answerChoice3").attr("value", answerChoices[3].atomicNumber);

    // Set correct
    correct = answerChoices[correctSlot].atomicNumber;
  } else if (question.includes("symbol")) {
    // Display Answer Choices
    $("#answerChoiceLabel1").text(answerChoices[0].symbol);
    $("#answerChoice1").attr("value", answerChoices[0].symbol);
    $("#answerChoiceLabel2").text(answerChoices[1].symbol);
    $("#answerChoice2").attr("value", answerChoices[1].symbol);
    $("#answerChoiceLabel3").text(answerChoices[2].symbol);
    $("#answerChoice2").attr("value", answerChoices[2].symbol);
    $("#answerChoiceLabel4").text(answerChoices[3].symbol);
    $("#answerChoice3").attr("value", answerChoices[3].symbol);

    // Set correct
    correct = answerChoices[correctSlot].symbol;
  }
}

$("#form").submit(e => {
  e.preventDefault();

  $("input[name='answerChoice']:checked").val();
});

loadQuestion();
