player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

p1Score = 0;
p2Score = 0;

function getName() {
    document.getElementById("player1Name").innerHTML = player1 + " : ";
    document.getElementById("p1Value").innerHTML = p1Score;

    document.getElementById("player2Name").innerHTML = player2 + " : ";
    document.getElementById("p2Value").innerHTML = p2Score;

    document.getElementById("questionPlayer").innerHTML = player1;
    document.getElementById("answerPlayer").innerHTML = player2;
}

function sendWord() {
    originalWord = document.getElementById("word").value;
    questionWord = originalWord.toLowerCase();
    console.log(questionWord);
    secondChar = questionWord.charAt(1);
    console.log(secondChar);
    middleChar = questionWord.charAt(questionWord.length / 2);
    console.log(middleChar);
    lastChar = questionWord.charAt(questionWord.length - 1);
    console.log(lastChar);
    secondRemove = questionWord.replace(secondChar, "_");
    console.log(secondRemove);
    middleRemove = secondRemove.replace(middleChar, "_");
    console.log(middleRemove);
    lastRemove = middleRemove.replace(lastChar, "_");
    console.log(lastRemove);

    opDiv = document.getElementById("output");
    var h4 = document.createElement("h4");
    h4.id = "questionLbl";
    h4.innerHTML = "Q. " + lastRemove;
    opDiv.appendChild(h4);
    var input = document.createElement("input");
    input.type = "text";
    input.id = "ansInput";
    var label = document.createElement("label");
    label.innerHTML = "Answer : ";
    opDiv.appendChild(label);
    opDiv.appendChild(input);
    var br = document.createElement("br");
    opDiv.appendChild(br);
    var button = document.createElement("button");
    button.id = "checkBtn";
    button.innerHTML = "Check";
    button.className = "btn btn-info";
    button.onclick = checkAns;
    opDiv.appendChild(button);
}

answerPlayer = player2;
questionPlayer = player1;

function checkAns() {
    answerWord = (document.getElementById("ansInput").value).toLowerCase();
    console.log(answerWord);
    if (questionWord == answerWord) {
        if (answerPlayer == player2) {
            p2Score = p2Score + 1;
        } else {
            p1Score = p1Score + 1;
        }
    }
    swithPlayer();
    console.log(p1Score);
    console.log(p2Score);
    document.getElementById("p1Value").innerHTML = p1Score;
    document.getElementById("p2Value").innerHTML = p2Score;
    document.getElementById("word").value = "";
    document.getElementById("output").innerHTML = "";
}

function swithPlayer() {
    if (answerPlayer == player2) {
        answerPlayer = player1;
        answerTurn = player1;
        questionPlayer = player2;

    } else {
        answerPlayer = player2;
        questionPlayer = player1;
    }
    console.log(questionPlayer);
    console.log(answerPlayer);
    document.getElementById("questionPlayer").innerHTML = questionPlayer;
    document.getElementById("answerPlayer").innerHTML = answerPlayer;
}