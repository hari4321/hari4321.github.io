var flag = true;  //This is for setting X or O
var flagPlay = true;  // This is for decidong whether to continue playing
var gamePlay = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];
var empty = 9;

const gameWinConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function isGameOver() {
    var roundWon = false;
    var i =0;
    for (i = 0; i < gameWinConditions.length; i++) {
        var isWin = gameWinConditions[i];
        var a = gamePlay[isWin?.[0]];
        var b = gamePlay[isWin?.[1]];
        var c = gamePlay[isWin?.[2]];
        if (a === 'e' || b === 'e' || c === 'e') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    return roundWon;
}

/* Selecting all the frames and adding event listeners*/ 
const cells = document.querySelectorAll('.frame');
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function () {
        var n = Number(this.id.at(-1))-1;
        if (this.textContent === '' && flagPlay) {
            if (flag) {
                this.textContent = 'X';
                this.classList.add('add-element');
                flag = false;
                gamePlay[n]='X';
                empty--;
            }
            else {
                this.textContent = 'O';
                this.classList.add('add-element');
                flag = true;
                gamePlay[n]='O';
                empty--;
            }
            if (isGameOver()){
                var winner=document.querySelector('#winner');
                if (flag){
                    winner.textContent='O is the Winner';
                }
                else{
                    winner.textContent='X is the Winner';
                }
                flagPlay=false;
            }
            else if(empty==0){
                var winner=document.querySelector('#winner');
                winner.textContent="It's a Draw";
            }
        }
    });
}