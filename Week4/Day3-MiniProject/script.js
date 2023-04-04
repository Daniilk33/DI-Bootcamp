function playTheGame() {
    const isUserReady = confirm("Do you want to play a game?");

    if (!isUserReady) {
        alert("No problem, Goodbye");
        return;
    }

    let attempts = 0;
    let userNumber;
    let isValidNumber = false;

    while (!isValidNumber && attempts < 3) {
        userNumber = prompt("Enter a number between 0 and 10");

        if (isNaN(userNumber)) {
            alert("Sorry, not a number. Goodbye");
            attempts++;
        } else if (userNumber < 0 || userNumber > 10) {
            alert("Sorry, it's not a good number. Goodbye");
            attempts++;
        } else {
            isValidNumber = true;
        }
    }

    if (isValidNumber) {
        const computerNumber = generateRandomNumber();
        compareNumbers(userNumber, computerNumber);
    } else {
        alert("Out of chances");
    }
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 11);
}

function compareNumbers(userNumber, computerNumber) {
    userNumber = parseInt(userNumber);

    if (userNumber === computerNumber) {
        alert("WINNER");
    } else if (userNumber > computerNumber) {
        alert("Your number is bigger than the computer's, guess again");
        playTheGame();
    } else {
        alert("Your number is smaller than the computer's, guess again");
        playTheGame();
    }
}