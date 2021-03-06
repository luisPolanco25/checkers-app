import React, { useContext } from 'react';
import { createBoard } from '../../helpers/createBoard';
import { startGame } from '../../helpers/startGame';
import { BoardContext } from '../context/BoardContext';
import { GameContext } from '../context/GameContext';
import { Row } from '../rows/Row';
import {kingMaker} from '../../helpers/kingMaker';

export const Board = () => {

    const {board, setBoard} = useContext(BoardContext);
    const {gameHelpers, setGameHelpers} = useContext(GameContext);
    const {gameHasStarted} = gameHelpers;
    
    const kingPlayer = board[0].indexOf('player');
    const kingComputer = board[7].indexOf('computer');

    if (kingPlayer >= 0 || kingComputer >= 0) {
        kingMaker(kingPlayer, kingComputer, board);
    }

    const handleStart = () => {
        setBoard(startGame(createBoard()));
        setTimeout(() => {
            setGameHelpers({
                gameHasStarted: !gameHasStarted,
                isPieceSelected: false,
                selectedPiecePosition: null,
                isComputerTurn: false,
            });
        }, 200);
    }

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
                            <Row row={row} rowIdx={rowIdx} />
                        }
                    </div>
                ))
            }

        </div>
        
        </>
    )
}
