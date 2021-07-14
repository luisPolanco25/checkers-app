
export const startGame = (board = []) => {

    // Computer pieces
    
    for (let x = 0; x <= 2; x++) {
        if (x % 2 === 0) {
            board.splice(x, 1, board[x].map((square, index) => {
                if (index % 2 !== 0) {
                    return 'computer';
                } else {
                    return null
                }
            }))
        } else {
            board.splice(x, 1, board[x].map((square, index) => {
                if (index % 2 === 0) {
                    return 'computer';
                } else {
                    return null
                }
            }))
        }
    }
    

    // Player pieces

    for (let x = 5; x <= 7; x++) {
        if (x % 2 === 0) {
            board.splice(x, 1, board[x].map((square, index) => {
                if (index % 2 !== 0) {
                    return 'player';
                } else {
                    return null
                }
            }))
        } else {
            board.splice(x, 1, board[x].map((square, index) => {
                if (index % 2 === 0) {
                    return 'player';
                } else {
                    return null
                }
            }))
        }
    }

   return board;

}