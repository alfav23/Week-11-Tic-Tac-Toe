// OBJECTIVES
// make main header change between players based on turn
// make an on-click event to generate x or o based on turn
// make a reset button and event to clear board when pressed
// alert for a draw and alert for winner

// create variable to change value of header declaring player turn
let playerTurn = $('.playerTurn')
console.log(playerTurn.innerHTML);
let cells= $('.cell')
console.log(cells.innerHTML);
let resetButton= $('.resetButton');
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
]
// function to mark board with x in clicked with cell
function markBoardWithX(){
    cells.addEventListener("click", ()=>{
        this.cells.innerHTML = "X"
    });

}
function markBoardWithO() {
    cells.addEventListener("click", () => {
        this.cells.innerHTML = "O"
    });
}

if (playerTurn.innerHTML == "X's turn") {
    // call function to mark board with x
    markBoardWithX();
    playerTurn.innerHTML = "O's turn"
}
// otherwise mark board with o
    markBoardWithO();

