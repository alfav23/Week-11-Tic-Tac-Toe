// OBJECTIVES
// make main header change between players based on turn
// make an on-click event to generate x or o based on turn
// make a reset button and event to clear board when pressed
// alert for a draw and alert for winner

// create variable to change value of header declaring player turn
// console.log($('h1')) //test if jquery is installed correctly
// it is but couldn't get $ to work maybe conflicting library but gave up and just used method by id 
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
// patterns needed to win
const winnerPattern = [
    // horizontal win
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], 
    // vertical win
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal win
    [0, 4, 8],
    [2, 4, 6]
];
// function to mark board with x in clicked with cell
function markBoardWithX(cells){
    for(let i=0; i<cells.length; i++){
        cells[i].addEventListener("click", ()=>{
            cells[i].innerHTML = "X"
        });
    }
}

function markBoardWithO(cells) {
    for(let i=0; i<cells.length; i++){
        cells[i].addEventListener("click", () =>{
            cells[i].innerHTML = "O"
        });
    }
}
// iterate through 9 turns
let moves = 0
// for (let i=0; i<9; i++){
    if (moves%2==0 && moves<9){
        playerTurn.innerHTML = "X's turn"
    }
    if (playerTurn.innerHTML == "X's turn" && moves<9) {
        // call function to mark board with x
        markBoardWithX(cells);
        moves++;
        // change to o's turn after board is marked
    }
    else if (moves%2!==0 && moves<9){
        playerTurn.innerHTML = "O's turn"
    // otherwise mark board with o
        markBoardWithO(cells);
    }
// }

function declareWinner(winner){
    body = document.getElementById('game')
    h2 = document.createElement('h2')
    body.append(h2)
    h2.innerHTML = winner
    console.log(winner)
}
// determine winner
function checkWinner(cells) {
    let winner = "";
    if ((cells[0].innerHTML == "X" && cells[1].innerHTML == "X" && cells[2].innerHTML == "X") || (cells[0].innerHTML == "O" && cells[1].innerHTML == "O" && cells[2].innerHTML == "O")) {
        winner = 'Player ' + cells[0].innerHTML + ' wins!'
        declareWinner(winner);
    }
    else if ((cells[3].innerHTML == "X" && cells[4].innerHTML == "X" && cells[5].innerHTML == "X") || (cells[3].innerHTML == "O" && cells[4].innerHTML == "O" && cells[5].innerHTML == "O")) {
        winner = 'Player ' + cells[3].innerHTML + ' wins!'
        declareWinner(winner);
    }
    else if ((cells[6].innerHTML == "X" && cells[7].innerHTML == "X" && cells[8].innerHTML == "X") || (cells[6].innerHTML == "O" && cells[7].innerHTML == "O" && cells[8].innerHTML == "O")) {
        winner = 'Player ' + cells[6].innerHTML + ' wins!'
        declareWinner(winner);
    }
    else if ((cells[0].innerHTML == "X" && cells[3].innerHTML == "X" && cells[6].innerHTML == "X") || (cells[0].innerHTML == "O" && cells[3].innerHTML == "O" && cells[6].innerHTML == "O")) {
        winner = 'Player ' + cells[0].innerHTML + ' wins!'
        declareWinner(winner);
    }
    else if ((cells[1].innerHTML == "X" && cells[4].innerHTML == "X" && cells[7].innerHTML == "X") || (cells[1].innerHTML == "O" && cells[4].innerHTML == "O" && cells[7].innerHTML == "O")) {
        winner = 'Player ' + cells[1].innerHTML + ' wins!'
        declareWinner(winner);
    }
    else if ((cells[2].innerHTML == "X" && cells[5].innerHTML == "X" && cells[8].innerHTML == "X") || (cells[2].innerHTML == "O" && cells[5].innerHTML == "O" && cells[8].innerHTML == "O")) {
        winner = 'Player ' + cells[2].innerHTML + ' wins!'
        declareWinner(winner);
    }
    else if ((cells[0].innerHTML == "X" && cells[4].innerHTML == "X" && cells[8].innerHTML == "X") || (cells[0].innerHTML == "O" && cells[4].innerHTML == "O" && cells[8].innerHTML == "O")) {
        winner = 'Player ' + cells[0].innerHTML + ' wins!'
        declareWinner(winner);
    }
    else if ((cells[2].innerHTML == "X" && cells[4].innerHTML == "X" && cells[6].innerHTML == "X") || (cells[2].innerHTML == "O" && cells[4].innerHTML == "O" && cells[6].innerHTML == "O")) {
        winner = 'Player ' + cells[2].innerHTML + ' wins!'
        declareWinner(winner);
    }
    else {
        winner = "Draw!";
        declareWinner(winner);
    }

    // placing list of winning patterns here to remind myself for writing if statements for winner
    // [0, 1, 2],
    // [3, 4, 5], 
    // [6, 7, 8], 
    // // vertical win
    // [0, 3, 6],
    // [1, 4, 7],
    // [2, 5, 8],
    // // diagonal win
    // [0, 4, 8],
    // [2, 4, 6]
  }
// function to clear board when button is pressed
function clearGame() {
    resetButton.addEventListener("click", () =>{
        cells[0].innerHTML = "";
        cells[1].innerHTML = "";
        cells[2].innerHTML = "";
        cells[3].innerHTML = "";
        cells[4].innerHTML = "";
        cells[5].innerHTML = "";
        cells[6].innerHTML = "";
        cells[7].innerHTML = "";
        cells[8].innerHTML = "";
    });
}

checkWinner(cells);

clearGame();