var questionNumber = (0);
console.log(questionNumber);

if (questionNumber == '0') {
    var startingText = document.createElement("h2");
    startingText.textContent = "Hello! Hit the start button to start the Awesome Quiz Game!";
    document.body.appendChild(startingText);

    var startButton = document.createElement("button");
    startButton.textContent = "Start";
    document.body.appendChild(startButton);
    startButton.setAttribute('id', 'button')
}   