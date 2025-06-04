function gameboard() {
    currentPlayer = 'X'
    let board = Array(9).fill(' ');
    let gameOver = false;
    function checkWin(player) {
        const wins = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return wins.some(combo => combo.every(i => board[i] == player))
    }
    function isDraw() {
        return board.every(cell => cell !== ' ');
    }
    function createBoard() {
        const grid = document.querySelector('.grid')
        grid.innerHTML=''
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.textContent = ' ';
            cell.style.cursor = 'pointer';
            cell.addEventListener('click', () => {
                if (board[i] !== ' ' || gameOver) return;
                board[i] = currentPlayer;
                cell.textContent = currentPlayer;
                if (checkWin(currentPlayer)) {
                    const res=document.querySelector('.result')
                    res.textContent=`${currentPlayer} wins`
                    gameOver = true;
                } else if (isDraw()) {
                    const res=document.querySelector('.result')
                    res.textContent=`${currentPlayer} wins`
                    gameOver = true;
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            })
            grid.appendChild(cell)
        }
    }
    createBoard();
    document.querySelector('button').addEventListener('click',()=>{
        board=Array(9).fill(' ')
        currentPlayer = 'X';
        gameOver = false;
        document.querySelector('.result').textContent = '';
        createBoard();
   })

}
gameboard()



