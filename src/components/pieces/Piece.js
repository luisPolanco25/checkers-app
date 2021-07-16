import React, { useContext } from 'react';
import { BoardContext } from '../context/BoardContext';
import { GameContext } from '../context/GameContext';

export const Piece = ({row, square, idx}) => {

    const {board, setBoard} = useContext(BoardContext);
    const {gameHelpers, setGameHelpers} = useContext(GameContext);
    const {gameHasStarted, isPieceSelected, isComputerTurn} = gameHelpers
    
    
    const handleMovesAndJumps = ({target}) => {
        
        if (gameHasStarted && square === 'player' && !isComputerTurn) {
            
            setTimeout(() => {
                setGameHelpers({
                    ...gameHelpers,
                    isPieceSelected: true,
                    selectedPiecePosition: {
                        row,
                        idx
                    }
                });
            }, 25);
            
            target.style.backgroundColor = '#66FF99'; 
            target.style.pointerEvents = 'none';
            
            let nextRow = board.indexOf(row) - 1; 
            
            for (let x = -1; x <= 1 ; x += 2) {
                
                if (board[nextRow] !== undefined &&
                    board[nextRow][idx + x] === null) {  
                    
                    setBoard((board) => board, board[nextRow][idx + x] = `movement${(x < 0) ? 1 : 2}`);
                    
                } else if (board[nextRow] !== undefined &&
                           board[nextRow - 1] !== undefined && 
                           (board[nextRow][idx + x] === 'computer' ||
                           board[nextRow][idx + x] === 'king-computer') &&
                           board[nextRow - 1][idx + (x * 2)] === null) {
                               
                            setBoard((board) => board, board[nextRow - 1][idx + (x * 2)] = `jump${(x < 0) ? 1 : 2}`);

                } 
                
            }            
            
        }

        if (gameHasStarted && square === 'king-player' && !isComputerTurn) {
            
            setTimeout(() => {
                setGameHelpers({
                    ...gameHelpers,
                    isPieceSelected: true,
                    selectedPiecePosition: {
                        row,
                        idx
                    }
                });
            }, 25);
            
            target.style.backgroundColor = '#66FF99'; 
            target.style.pointerEvents = 'none';
            
            const nextRow = board.indexOf(row) - 1; 
            
            for (let x = -1; x <= 1 ; x += 2) {
                
                if (board[nextRow] !== undefined &&
                    board[nextRow][idx + x] === null) {  
                    
                    setBoard((board) => board, board[nextRow][idx + x] = `movement${(x < 0) ? 1 : 2}`);
                    
                } else if (!(nextRow - 1 < 0) && 
                           (board[nextRow][idx + x] === 'computer' ||
                           board[nextRow][idx + x] === 'king-computer') &&
                           board[nextRow - 1][idx + (x * 2)] === null) {
                               
                            setBoard((board) => board, board[nextRow - 1][idx + (x * 2)] = `jump${(x < 0) ? 1 : 2}`);

                } 
                
            }            
            
        }
    }
    

    const handleBlur = ({target}) => {
        
        if (gameHasStarted && square === 'player' && !isComputerTurn) {

            target.style.backgroundColor = '#C40003';
            target.style.pointerEvents = 'all';
            
                setTimeout(() => {
                    setGameHelpers({
                        ...gameHelpers,
                        isPieceSelected: (isPieceSelected) ? true : false,
                    });    
                }, 150);


            let nextRow = board.indexOf(row) - 1; 


            for (let x = -1; x <= 1 ; x += 2) {

                if (board[nextRow] !== undefined &&
                    (board[nextRow][idx + x] === 'movement1' ||
                    board[nextRow][idx + x] === 'movement2')) {  
                    
                    setBoard((board) => board, board[nextRow][idx + x] = null);
                    
                } else if (board[nextRow] !== undefined &&
                           board[nextRow - 1] !== undefined &&
                           board[nextRow][idx + x] === 'computer' &&
                           (board[nextRow - 1][idx + (x * 2)] === 'jump1' ||
                           board[nextRow - 1][idx + (x * 2)] === 'jump2')) {
                                
                            setBoard((board) => board, board[nextRow - 1][idx + (x * 2)] = null);

                }  
            }
                        
        }
    }
    
    return (
        <div 
            className="pieces"
            style={
                (gameHasStarted && square === 'computer') ? {backgroundColor: '#FFF9F4', filter: 'none'} : 
                (gameHasStarted && square === 'king-computer') ? {backgroundColor: '#B9F2FF', filter: 'none'} : 
                (gameHasStarted && !isComputerTurn && square === 'player') ? {backgroundColor: '#C40003', cursor: 'pointer', pointerEvents: 'all'} :
                (gameHasStarted && !isComputerTurn && square === 'king-player') ? {backgroundColor: '#FFD700', cursor: 'pointer', pointerEvents: 'all'} :
                (isComputerTurn && square === 'king-player') ? {backgroundColor: '#FFD700', cursor: 'default', pointerEvents: 'none'} :
                (isComputerTurn && square === 'player') ? {backgroundColor: '#C40003', cursor: 'default', pointerEvents: 'none'} :
                {display:'none'}
            }
            onClick={handleMovesAndJumps}
            tabIndex="1"
            onBlur={handleBlur}
        >
            
        </div>
    )
}
