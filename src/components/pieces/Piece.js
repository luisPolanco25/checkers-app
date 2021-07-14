import React, { useContext } from 'react';
import { BoardContext } from '../context/BoardContext';
import { GameContext } from '../context/GameContext';
import { MovementsContext } from '../context/MovementsContext';

export const Piece = ({row, square, idx}) => {

    const {board, setBoard} = useContext(BoardContext);
    const {gameHasStarted} = useContext(GameContext);
    const {isPieceSelected, setIsPieceSelected} = useContext(MovementsContext);
    
    const handleMove = ({target}) => {
        if (gameHasStarted && square === 'player') {
            setIsPieceSelected(!isPieceSelected);
            target.style.backgroundColor = '#66FF99'; 
            target.style.pointerEvents = 'none';

            const nextRow = board.indexOf(row) - 1; 
            
            for (let x = -1; x <= 1 ; x += 2) {

                if (board[nextRow][idx + x] === null) {  
                    
                    setBoard((board) => board, board[nextRow][idx + x] = `movement${(x < 0) ? 1 : 2}`);
                    
                } else if (board[nextRow][idx + x] === 'computer' &&
                           board[nextRow + x][idx + x] === null) {
                                
                            setBoard((board) => board, board[nextRow + x][idx + x] = `movement${(x < 0) ? 1 : 2}`);
                }  
            }            
            
        }
    }

    const handleBlur = ({target}) => {
        
        if (gameHasStarted && square === 'player') {
            setIsPieceSelected(!isPieceSelected);
            target.style.backgroundColor = '#C40003';
            target.style.pointerEvents = 'all';

            const nextRow = board.indexOf(row) - 1; 

            for (let x = -1; x <= 1 ; x += 2) {

                if (board[nextRow][idx + x] !== null) {  
                    
                    setBoard((board) => board, board[nextRow][idx + x] = null);
                    
                } else if (board[nextRow][idx + x] === 'computer' &&
                           board[nextRow + x][idx + x] === null) {
                                
                            setBoard((board) => board, board[nextRow + x][idx + x] = null);
                }  
            }
                        
        }
    }

    return (
        <div 
            className="pieces"
            style={
                (gameHasStarted && square === 'computer') ? {backgroundColor: '#FFF9F4', filter: 'none'} : 
                (gameHasStarted && square === 'player') ? {backgroundColor: '#C40003', cursor: 'pointer'} :
                {display:'none'}
            }
            onClick={handleMove}
            tabIndex="1"
            onBlur={handleBlur}
        >
            
        </div>
    )
}
