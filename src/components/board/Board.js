import React, { useContext } from 'react';
import { startGame } from '../../helpers/startGame';
import { BoardContext } from '../context/BoardContext';
import { GameContext } from '../context/GameContext';
import { MovementsContext } from '../context/MovementsContext';
import { Piece } from '../pieces/Piece';

export const Board = () => {

    const {board, setBoard} = useContext(BoardContext);
    const {isPieceSelected} = useContext(MovementsContext);
    const {gameHasStarted, setGameHasStarted} = useContext(GameContext);

    const handleStart = () => {
        setBoard(startGame(board));
        setGameHasStarted(!gameHasStarted);
    }

    console.log(board);

    return (
        <>
        
        <button 
            id="start" 
            onClick={handleStart}
            style={
                (gameHasStarted) ? {backgroundColor:'#D53430'} : null
            }
            
        >
            {
                (!gameHasStarted) ? 'Start Game' : 'Finish'
            }
        </button>
        
        <div id="board">
            {
                board.map((row, rowIdx) => (
                    <div className="row" key={`row-${rowIdx + 1}`}>
                        {
                            row.map((square, squareIdx) => (
                                <div 
                                    className="square" 
                                    style={
                                        (squareIdx % 2 !== 0 && rowIdx % 2 === 0) ? {backgroundColor: '#D18B47'} : 
                                        (squareIdx % 2 === 0 && rowIdx % 2 !== 0) ? {backgroundColor: '#D18B47'} :
                                        null
                                    }
                                    key={`row-${rowIdx}-square-${squareIdx + 1}`}
                                    >

                                    <Piece row={row} square={square} idx={squareIdx} />
                                </div>
                            ))
                        }
                    </div>
                ))
            }

        </div>
        
        </>
    )
}
