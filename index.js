// OBJECTIVES
// make main header change between players based on turn
// make an on-click event to generate x or o based on turn
// make a reset button and event to clear board when pressed
// alert for a draw: DONE, and alert for winner

// console.log($('h1')) //test if jquery is installed correctly
// it is but couldn't get $ to work maybe conflicting library but gave up and just used get element by id method
// create variable to change value of header declaring player turn
let playerTurn = document.getElementById('playerTurn')
console.log(playerTurn.innerHTML);
let cells= [document.getElementById('0'), 
            document.getElementById('1'), 
            document.getElementById('2'), 
            document.getElementById('3'), 
            document.getElementById('4'), 
            document.getElementById('5'), 
            document.getElementById('6'), 
            document.getElementById('7'), 
            document.getElementById('8')
            ];
console.log(cells[0].innerHTML);
let resetButton= document.getElementById('resetButton');
console.log(resetButton.innerHTML);

function markBoardWithX(event){
    const cell = event.target;
    cell.innerHTML = "X";
    // change to o's turn after board is marked with x
    playerTurn.innerHTML = "O's turn";
    checkWinner(cells);
}

function markBoardWithO(event) {
    const cell = event.target;
    cell.innerHTML = "O";
    // change to x's turn after board is marked with o
    playerTurn.innerHTML = "X's turn";
    checkWinner(cells);
}

// add event listener to each cell and track moves
let move = 0;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", (event) => {
    if (move % 2 == 0) {
      markBoardWithX(event);
    } else {
      markBoardWithO(event);
    }
    move++;
  });
}


// determine winner
let winner = "";
function checkWinner(cells) {
    if ((cells[0].innerHTML === "X" && cells[1].innerHTML === "X" && cells[2].innerHTML === "X") || (cells[0].innerHTML === "O" && cells[1].innerHTML === "O" && cells[2].innerHTML === "O")) {
        winner = 'Player ' + cells[0].innerHTML + ' wins!';
        declareWinner(winner);
    }
    else if ((cells[3].innerHTML === "X" && cells[4].innerHTML === "X" && cells[5].innerHTML === "X") || (cells[3].innerHTML === "O" && cells[4].innerHTML === "O" && cells[5].innerHTML === "O")) {
        winner = 'Player ' + cells[3].innerHTML + ' wins!';
        declareWinner(winner);
    }
    else if ((cells[6].innerHTML === "X" && cells[7].innerHTML === "X" && cells[8].innerHTML === "X") || (cells[6].innerHTML === "O" && cells[7].innerHTML === "O" && cells[8].innerHTML === "O")) {
        winner = 'Player ' + cells[6].innerHTML + ' wins!';
        declareWinner(winner);
    }
    else if ((cells[0].innerHTML === "X" && cells[3].innerHTML === "X" && cells[6].innerHTML === "X") || (cells[0].innerHTML === "O" && cells[3].innerHTML === "O" && cells[6].innerHTML === "O")) {
        winner = 'Player ' + cells[0].innerHTML + ' wins!';
        declareWinner(winner);
    }
    else if ((cells[1].innerHTML === "X" && cells[4].innerHTML === "X" && cells[7].innerHTML === "X") || (cells[1].innerHTML === "O" && cells[4].innerHTML === "O" && cells[7].innerHTML === "O")) {
        winner = 'Player ' + cells[1].innerHTML + ' wins!';
        declareWinner(winner);
    }
    else if ((cells[2].innerHTML === "X" && cells[5].innerHTML === "X" && cells[8].innerHTML === "X") || (cells[2].innerHTML === "O" && cells[5].innerHTML === "O" && cells[8].innerHTML === "O")) {
        winner = 'Player ' + cells[2].innerHTML + ' wins!';
        declareWinner(winner);
    }
    else if ((cells[0].innerHTML === "X" && cells[4].innerHTML === "X" && cells[8].innerHTML === "X") || (cells[0].innerHTML === "O" && cells[4].innerHTML === "O" && cells[8].innerHTML === "O")) {
        winner = 'Player ' + cells[0].innerHTML + ' wins!';
        declareWinner(winner);
    }
    else if ((cells[2].innerHTML === "X" && cells[4].innerHTML === "X" && cells[6].innerHTML === "X") || (cells[2].innerHTML === "O" && cells[4].innerHTML === "O" && cells[6].innerHTML === "O")) {
        winner = 'Player ' + cells[2].innerHTML + ' wins!';
        declareWinner(winner);
    }
    else {
        winner = "Draw!";
        declareWinner(winner);
    }
}

// function to create a header that displays winner when game is over
function declareWinner(winner) {
    if (move == 8 && winner !== "") {
        let body = document.getElementById('game');
        let h2 = document.createElement('h2');
        body.append(h2);
        h2.innerHTML = winner;
        console.log(winner);
    }
}

// function to clear board and reset game
function clearGame() {
    cells[0].innerHTML = "";
    cells[1].innerHTML = "";
    cells[2].innerHTML = "";
    cells[3].innerHTML = "";
    cells[4].innerHTML = "";
    cells[5].innerHTML = "";
    cells[6].innerHTML = "";
    cells[7].innerHTML = "";
    cells[8].innerHTML = "";
    winner = "";
    move = 0;
    playerTurn.innerHTML = "X's turn"
}

// call clear game function when reset button is clicked
resetButton.addEventListener("click", clearGame);