
export const computerPlaythrough = (board = []) => {
    
    const newBoard = [...board];
    

    const computerMovesOrJumps = () => {
        const randomRow = newBoard.indexOf(newBoard[Math.floor(Math.random() * newBoard.length)]);
        const randomPiece = newBoard[randomRow].indexOf(newBoard[randomRow][Math.floor(Math.random() * newBoard[randomRow].length)]);
        const nextRow = randomRow + 1; 

        if (newBoard[randomRow][randomPiece] === null ||
            newBoard[randomRow][randomPiece] === 'king-player' || 
            newBoard[randomRow][randomPiece] === 'player') {
                
            return computerMovesOrJumps();

        } else if (newBoard[randomRow][randomPiece] === 'king-computer') {

            if (newBoard[nextRow] !== undefined &&
                newBoard[nextRow + 1] !== undefined &&
                (newBoard[nextRow][randomPiece + 1] === 'player' ||
                newBoard[nextRow][randomPiece + 1] === 'king-player') &&
                newBoard[nextRow + 1][randomPiece + 2] === null) {

                newBoard[nextRow][randomPiece + 1] = null;
                newBoard[nextRow + 1][randomPiece + 2] = 'king-computer';
                newBoard[randomRow][randomPiece] = null;

                    
            } else if (newBoard[nextRow] !== undefined &&
                newBoard[nextRow - 1] !== undefined &&
                (newBoard[nextRow][randomPiece + 1] === 'player' ||
                newBoard[nextRow][randomPiece + 1] === 'king-player') &&
                newBoard[nextRow - 1][randomPiece + 2] === null) {

                newBoard[nextRow][randomPiece + 1] = null;
                newBoard[nextRow - 1][randomPiece + 2] = 'king-computer';
                newBoard[randomRow][randomPiece] = null;
                
            } else if (newBoard[nextRow] !== undefined &&
                newBoard[nextRow + 1] !== undefined &&
                (newBoard[nextRow][randomPiece - 1] === 'player' ||
                newBoard[nextRow][randomPiece - 1] === 'king-player') &&
                newBoard[nextRow + 1][randomPiece - 2] === null) {
                            
                newBoard[nextRow][randomPiece - 1] = null;
                newBoard[nextRow + 1][randomPiece - 2] = 'king-computer';
                newBoard[randomRow][randomPiece] = null;

            } else if (newBoard[nextRow] !== undefined &&
                newBoard[nextRow - 1] !== undefined &&
                (newBoard[nextRow][randomPiece + 1] === 'player' ||
                newBoard[nextRow][randomPiece + 1] === 'king-player') &&
                newBoard[nextRow - 1][randomPiece - 2] === null) {

                newBoard[nextRow][randomPiece + 1] = null;
                newBoard[nextRow - 1][randomPiece - 2] = 'king-computer';
                newBoard[randomRow][randomPiece] = null;

                
            } else if (newBoard[nextRow] !== undefined &&
                newBoard[nextRow][randomPiece + 1] === null) {  
                
                    newBoard[randomRow][randomPiece] = null;
                    newBoard[nextRow][randomPiece + 1] = 'king-computer';
                
            } else if (newBoard[randomRow - 1] !== undefined &&
                newBoard[randomRow - 1][randomPiece + 1] === null) {  
                
                newBoard[randomRow][randomPiece] = null;
                newBoard[randomRow - 1][randomPiece + 1] = 'king-computer';
            
            } else if (newBoard[nextRow] !== undefined &&
                newBoard[nextRow][randomPiece - 1] === null) {
        
                newBoard[randomRow][randomPiece] = null;
                newBoard[nextRow][randomPiece - 1] = 'king-computer';
                            
            } else if (newBoard[randomRow - 1] !== undefined &&
                newBoard[randomRow - 1][randomPiece - 1] === null) {  
                
                newBoard[randomRow][randomPiece] = null;
                newBoard[randomRow - 1][randomPiece - 1] = 'king-computer';
            
            } else {
                computerMovesOrJumps()
            }

        } else if (newBoard[randomRow][randomPiece] === 'computer') {

            if (newBoard[nextRow] !== undefined &&
                newBoard[nextRow + 1] !== undefined &&
                (newBoard[nextRow][randomPiece + 1] === 'player' ||
                newBoard[nextRow][randomPiece + 1] === 'king-player') &&
                newBoard[nextRow + 1][randomPiece + 2] === null) {

                newBoard[nextRow][randomPiece + 1] = null;
                newBoard[nextRow + 1][randomPiece + 2] = 'computer';
                newBoard[randomRow][randomPiece] = null;

                
            } else if (newBoard[nextRow] !== undefined &&
                newBoard[nextRow + 1] !== undefined &&
                (newBoard[nextRow][randomPiece - 1] === 'player' ||
                newBoard[nextRow][randomPiece - 1] === 'king-player') &&
                newBoard[nextRow + 1][randomPiece - 2] === null) {
                            
                    newBoard[nextRow][randomPiece - 1] = null;
                    newBoard[nextRow + 1][randomPiece - 2] = 'computer';
                    newBoard[randomRow][randomPiece] = null;

            } else if (newBoard[nextRow] !== undefined &&
                newBoard[nextRow][randomPiece + 1] === null) {  
                
                    newBoard[randomRow][randomPiece] = null;
                    newBoard[nextRow][randomPiece + 1] = 'computer';
                
            } else if (newBoard[nextRow] !== undefined &&
                newBoard[nextRow][randomPiece - 1] === null) {
        
                    newBoard[randomRow][randomPiece] = null;
                    newBoard[nextRow][randomPiece - 1] = 'computer';
                            
            } else {
                computerMovesOrJumps()
            }

        } else {
            computerMovesOrJumps()
        }

    }            
        
        computerMovesOrJumps();
        return newBoard;

}