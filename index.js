// OBJECTIVES
// make main header change between players based on turn: DONE BUT HEADER NOT CHANGING
// make an on-click event to generate x or o based on turn: DONE BUT NOT CHANGING PLAYER/LETTER BASED ON TURN
// make a reset button and event to clear board when pressed: DONE
// alert for a draw: DONE, and alert for winner: DONE BUT NOT WORKING

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
// const winnerPattern = [
//     // horizontal win
//     [0, 1, 2],
//     [3, 4, 5], 
//     [6, 7, 8], 
//     // vertical win
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     // diagonal win
//     [0, 4, 8],
//     [2, 4, 6]
// ];
// function to mark board with x in clicked with cell
function markBoardWithX(cells){
    for(let i=0; i<cells.length; i++){
        cells[i].addEventListener("click", ()=>{
            cells[i].innerHTML = "X"
            // change to o's turn after board is marked with x
            playerTurn.innerHTML = "O's turn"
        });
    }
}

function markBoardWithO(cells) {
    for(let i=0; i<cells.length; i++){
        cells[i].addEventListener("click", () =>{
            cells[i].innerHTML = "O"
            // change to o's turn after board is marked with x
            playerTurn.innerHTML = "X's turn"
        });
    }
}
// iterate through 9 turns
function playGame(){
    for (let move=0; move<9; move++){
        // if move is even, header says x's turn and cell is marked with x
        if (move%2==0){
            playerTurn.innerHTML = "X's turn"
            // call function to mark board with x
            markBoardWithX(cells);
        }
        // if move is odd, header says o's turn and cell is marked with o
        if (move%2!==0 && playerTurn.innerHTML == "O's turn"){
            // mark board with o
            markBoardWithO(cells);
        }
    }
}

// function to create a header that displays winner when game is over
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
    }
    else if ((cells[3].innerHTML == "X" && cells[4].innerHTML == "X" && cells[5].innerHTML == "X") || (cells[3].innerHTML == "O" && cells[4].innerHTML == "O" && cells[5].innerHTML == "O")) {
        winner = 'Player ' + cells[3].innerHTML + ' wins!'
    }
    else if ((cells[6].innerHTML == "X" && cells[7].innerHTML == "X" && cells[8].innerHTML == "X") || (cells[6].innerHTML == "O" && cells[7].innerHTML == "O" && cells[8].innerHTML == "O")) {
        winner = 'Player ' + cells[6].innerHTML + ' wins!'
    }
    else if ((cells[0].innerHTML == "X" && cells[3].innerHTML == "X" && cells[6].innerHTML == "X") || (cells[0].innerHTML == "O" && cells[3].innerHTML == "O" && cells[6].innerHTML == "O")) {
        winner = 'Player ' + cells[0].innerHTML + ' wins!'
    }
    else if ((cells[1].innerHTML == "X" && cells[4].innerHTML == "X" && cells[7].innerHTML == "X") || (cells[1].innerHTML == "O" && cells[4].innerHTML == "O" && cells[7].innerHTML == "O")) {
        winner = 'Player ' + cells[1].innerHTML + ' wins!'
    }
    else if ((cells[2].innerHTML == "X" && cells[5].innerHTML == "X" && cells[8].innerHTML == "X") || (cells[2].innerHTML == "O" && cells[5].innerHTML == "O" && cells[8].innerHTML == "O")) {
        winner = 'Player ' + cells[2].innerHTML + ' wins!'
    }
    else if ((cells[0].innerHTML == "X" && cells[4].innerHTML == "X" && cells[8].innerHTML == "X") || (cells[0].innerHTML == "O" && cells[4].innerHTML == "O" && cells[8].innerHTML == "O")) {
        winner = 'Player ' + cells[0].innerHTML + ' wins!'
    }
    else if ((cells[2].innerHTML == "X" && cells[4].innerHTML == "X" && cells[6].innerHTML == "X") || (cells[2].innerHTML == "O" && cells[4].innerHTML == "O" && cells[6].innerHTML == "O")) {
        winner = 'Player ' + cells[2].innerHTML + ' wins!'
    }
    else {
        winner = "Draw!";
    }
    // at end of if statement call declare winner function
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
        h2 = "";
        move = 0;
        playerTurn.innerHTML = "X's turn"
    });
}

playGame();

checkWinner(cells);

clearGame();