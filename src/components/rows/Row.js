import React, { useContext } from 'react'
import { BoardContext } from '../context/BoardContext';
import { GameContext } from '../context/GameContext';
import { Piece } from '../pieces/Piece'
import {computerPlaythrough} from '../../computer/computerPlaythrough';

export const Row = ({row, rowIdx}) => {
    
    const {gameHelpers, setGameHelpers} = useContext(GameContext);
    const {isPieceSelected, selectedPiecePosition, isComputerTurn} = gameHelpers;
    const {board, setBoard} = useContext(BoardContext);

    const handleMove = (row, square, squareIdx) => {
        
        if (isPieceSelected && (square === 'movement1' || square === 'movement2')) {
            
            const pieceRow = board.indexOf(selectedPiecePosition.row);
            const pieceIdx = selectedPiecePosition.idx
            
            board[pieceRow][pieceIdx] = null

            const selectedRow = board.indexOf(row);
            board[selectedRow][squareIdx] = 'player';
            setGameHelpers({...gameHelpers, isPieceSelected: false, isComputerTurn: true});
            
            setBoard(computerPlaythrough(isComputerTurn, board));
            
        }

    }
    
    
    return (
        <>
        {
            row.map((square, squareIdx) => (
                <div
                className="square" 
                style={
                    (isPieceSelected && (square === 'movement1' || square === 'movement2')) ? 
                    {backgroundColor: '#66FF99', cursor: 'pointer'} :
                    
                    (squareIdx % 2 !== 0 && rowIdx % 2 === 0) ? {backgroundColor: '#D18B47'} : 
                    (squareIdx % 2 === 0 && rowIdx % 2 !== 0) ? {backgroundColor: '#D18B47'} :
                    null
                }
                key={`row-${rowIdx}-square-${squareIdx + 1}`}
                onClick={() => handleMove(row, square, squareIdx)}
                >
                    <Piece row={row} square={square} idx={squareIdx} />

                </div>
            ))
        }
        </>
    )
}
