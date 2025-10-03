// Function Declaration
function checkAnswer() {
    // Correct Answer
    const correctAnswer = "4";

    // Retrieve the User's Answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = null;

    if (selectedOption) {
        userAnswer = selectedOption.value;
    }

    // Compare User's Answer with Correct Answer
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add Event Listener to the Submit Button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
