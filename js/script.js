var argButtonName, buttonPaper, buttonRock, buttonScissors, buttonTest;
const gameSummary = {
    playerWins: 0,
    AiWins: 0
}

function buttonClicked(argButtonName) {
    clearMessages();
    // console.log(argButtonName + ' został kliknięty');
    var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

    function getMoveName(argMoveId) {
        // console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
            return 'kamień';
        }
    }

    function displayResult(argPlayerMove, argComputerMove) {
        // console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
        if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
            printMessage('Wygrywasz!');
            document.querySelector('p.playerGamesWin span').textContent = ++gameSummary.playerWins;
        } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
            printMessage('Wygrywasz!');
            document.querySelector('p.playerGamesWin span').textContent = ++gameSummary.playerWins;
        } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
            printMessage('Wygrywasz!');
            document.querySelector('p.playerGamesWin span').textContent = ++gameSummary.playerWins;
        } else if (argPlayerMove == argComputerMove) {
            printMessage('Remis!');
        } else {
            printMessage('Przegrywasz :(');
            document.querySelector('p.AiGamesWin span').textContent = ++gameSummary.AiWins;
        }
        displayEndingMessage()
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');
    }
    playerMove = argButtonName;
    // console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    // console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    // console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);

}

buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function () {
    buttonClicked('kamień');
});
buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function () {
    buttonClicked('papier');
});
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function () {
    buttonClicked('nożyce');
});

function displayEndingMessage() {
    if (gameSummary.playerWins >= 10) {
        printMessageWin('WYGRAŁEŚ!');
        showResetButton();
        hangeDisplayText();
    } else if (gameSummary.AiWins >= 10) {
        printMessageWin('PRZEGRAŁEŚ..');
        showResetButton();
        hangeDisplayText();
    }
}