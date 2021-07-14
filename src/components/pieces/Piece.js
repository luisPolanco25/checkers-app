import React, { useContext } from 'react';
import { movements } from '../../helpers/movements';
import { GameContext } from '../gameContext/GameContext';

export const Piece = ({board, square}) => {

    const {gameHasStarted} = useContext(GameContext);

    // const handleClick = () => {
    //     if (gameHasStarted) {
    //         movements(board);
    //     }
    // }

    return (
        <div 
            className="pieces"
            style={
                (gameHasStarted && square === 'computer') ? {backgroundColor: '#FFF9F4', filter: 'none'} : 
                (gameHasStarted && square === 'player') ? {backgroundColor: '#C40003', cursor: 'pointer'} :
                {display:'none'}
            }
            onClick={handleClick}
        >
            
        </div>
    )
}
