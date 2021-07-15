
export const computerPlaythrough = (isComputerTurn, board = []) => {

        
    const computerMovesOrJumps = () => {
        const randomRow = board.indexOf(board[Math.floor(Math.random() * board.length)]);
        const randomPiece = board[randomRow].indexOf(board[randomRow][Math.floor(Math.random() * board[randomRow].length)]);

        if (board[randomRow].indexOf('computer') < 0 ||
            board[randomRow][randomPiece] !== 'computer') {
                
            return computerMovesOrJumps();

        }
   
        const nextRow = randomRow + 1; 
        
        
        if (board[nextRow][randomPiece + 1] === 'player' &&
            board[nextRow + 1][randomPiece + (1 * 2)] === null) {

            setTimeout(() => {
                board[nextRow][randomPiece + 1] = null;
                board[nextRow + 1][randomPiece + (1 * 2)] = 'computer';
            }, 5);    

            return board;
                    
        } else if (board[nextRow][randomPiece - 1] === 'player' &&
            board[nextRow + 1][randomPiece - (1 * 2)] === null) {
                        
            setTimeout(() => {
                board[nextRow][randomPiece - 1] = null;
                board[nextRow + 1][randomPiece - (1 * 2)] = 'computer';
            }, 5);

            return board;

        } else if (board[nextRow][randomPiece + 1] === null) {  
            
            setTimeout(() => {
                board[randomRow][randomPiece] = null;
                board[nextRow][randomPiece + 1] = 'computer';
            }, 10);
            
            return board;
            
        } else if (board[nextRow][randomPiece - 1] === null) {
    
            setTimeout(() => {
                board[randomRow][randomPiece] = null;
                board[nextRow][randomPiece + 1] = 'computer';
            }, 10);
            
            return board;
            
        } else {
            computerMovesOrJumps()
        }
        
    }            
            
        
    computerMovesOrJumps();
    

    return board;

}
    