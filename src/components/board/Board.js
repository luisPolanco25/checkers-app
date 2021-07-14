import React from 'react'
import { createBoard } from '../../helpers/createBoard'

export const Board = () => {

    const board = createBoard();

    return (
        <div id="board">
            {
                board.map((row, rowIdx) => (
                    <div id={`row-${rowIdx + 1}`} className="row">
                        {
                            row.map((square, squareIdx) => (
                                <div 
                                    className="square" 
                                    style={
                                        (squareIdx % 2 !== 0 && rowIdx % 2 === 0) ? {backgroundColor: '#D18B47'} : 
                                        (squareIdx % 2 === 0 && rowIdx % 2 !== 0) ? {backgroundColor: '#D18B47'}
                                        : null
                                    }
                                >
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}
