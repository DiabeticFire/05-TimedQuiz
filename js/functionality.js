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
    let q = questions[Math.floor(Math.random() * questions.length)];
    let question = q.question;
    let temp = question.split("_");
    let element = table[Math.floor(Math.random() * 118)];
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
    selectAnswers(q.answerType);
    return question;
}

function selectAnswers(answerType) {
    let answers = ["", "", "", ""];
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
        $("#answerChoices").append($("<div>").text(answers[i]).attr("class", "answerChoices"));
        console.log(answers[i]);
    };
}

$(".answerChoices").on("click", function() {
    
})

selectQuestion();
