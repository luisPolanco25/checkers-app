import React, { useContext } from 'react'
import { BoardContext } from '../context/BoardContext';
import { GameContext } from '../context/GameContext';
import { Piece } from '../pieces/Piece'
import {computerPlaythrough} from '../../computer/computerPlaythrough';

export const Row = ({row, rowIdx}) => {
    
    const {gameHelpers, setGameHelpers} = useContext(GameContext);
    const {isPieceSelected, selectedPiecePosition} = gameHelpers;
    const {board, setBoard} = useContext(BoardContext);

    const handleMove = (row, square, squareIdx) => {
        
        if (isPieceSelected &&
            board[board.indexOf(selectedPiecePosition.row)][selectedPiecePosition.idx] === 'player' &&
            (square === 'movement1' || square === 'movement2')) {
            
            const pieceRow = board.indexOf(selectedPiecePosition.row);
            const pieceIdx = selectedPiecePosition.idx;
            
            board[pieceRow][pieceIdx] = null;
            
            const selectedRow = board.indexOf(row);
            board[selectedRow][squareIdx] = 'player';
            
            gameHelpers.isComputerTurn = true;

            
            setTimeout(() => {
                setBoard(computerPlaythrough(board));
                setGameHelpers({...gameHelpers, isComputerTurn: false})
            }, 2500);
            
        }

        if (isPieceSelected &&
            board[board.indexOf(selectedPiecePosition.row)][selectedPiecePosition.idx] === 'player' &&
            (square === 'jump1' || square === 'jump2')) {
            
            const pieceRow = board.indexOf(selectedPiecePosition.row);
            const pieceIdx = selectedPiecePosition.idx
            
            board[pieceRow][pieceIdx] = null;
            
            const selectedRow = board.indexOf(row);
            board[selectedRow][squareIdx] = 'player';
            
            if (square === 'jump1') {
                board[selectedRow + 1][squareIdx + 1] = null;
            } 

            if (square === 'jump2') {
                board[selectedRow + 1][squareIdx - 1] = null;
            }

            gameHelpers.isComputerTurn = true;

            
            setTimeout(() => {
                setBoard(computerPlaythrough(board));
                setGameHelpers({...gameHelpers, isComputerTurn: false})
            }, 2500);
            
        }

        if (isPieceSelected && 
            board[board.indexOf(selectedPiecePosition.row)][selectedPiecePosition.idx] === 'king-player' &&
           (square === 'movement1' || square === 'movement2' ||
           square === 'movement3' ||square === 'movement4')) {
            
            const pieceRow = board.indexOf(selectedPiecePosition.row);
            const pieceIdx = selectedPiecePosition.idx;
            
            
            
            board[pieceRow][pieceIdx] = null;
            const selectedRow = board.indexOf(row);
            
            board[selectedRow][squareIdx] = 'king-player';
            
            gameHelpers.isComputerTurn = true;

            
            setTimeout(() => {
                setBoard(computerPlaythrough(board));
                setGameHelpers({...gameHelpers, isComputerTurn: false})
            }, 2500);
            
        }

        if (isPieceSelected &&
            board[board.indexOf(selectedPiecePosition.row)][selectedPiecePosition.idx] === 'king-player' &&
           (square === 'jump1' || square === 'jump2' ||
           square === 'jump3' || square === 'jump4')) {
            
            const pieceRow = board.indexOf(selectedPiecePosition.row);
            const pieceIdx = selectedPiecePosition.idx

            board[pieceRow][pieceIdx] = null;

            const selectedRow = board.indexOf(row);
            board[selectedRow][squareIdx] = 'king-player';

            
            if (square === 'jump1') {
                board[selectedRow + 1][squareIdx + 1] = null;
            } 

            if (square === 'jump2') {
                board[selectedRow - 1][squareIdx + 1] = null;
            }

            if (square === 'jump3') {
                board[selectedRow + 1][squareIdx - 1] = null;
            } 

            if (square === 'jump4') {
                board[selectedRow - 1][squareIdx - 1] = null;
            }

            gameHelpers.isComputerTurn = true;

            
            setTimeout(() => {
                setBoard(computerPlaythrough(board));
                setGameHelpers({...gameHelpers, isComputerTurn: false})
            }, 2500);
            
        }


    }
    
    
    return (
        <>
        {
            row.map((square, squareIdx) => (
                <div
                className="square" 
                style={
                    (isPieceSelected && (square === 'movement1' || square === 'movement2' || 
                    square === 'movement3' || square === 'movement4' ||
                    square === 'jump1' || square === 'jump2' ||
                    square === 'jump3' ||square === 'jump4')) ? 
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
