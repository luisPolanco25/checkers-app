import React, { useContext } from 'react';
import { scoreCounter } from '../../helpers/scoreCounter';
import { BoardContext } from '../context/BoardContext';
import { GameContext } from '../context/GameContext';

export const Scores = () => {

    const {board} = useContext(BoardContext);
    const {gameHelpers, setGameHelpers} = useContext(GameContext);
    const {gameHasStarted} = gameHelpers;
    
    if (gameHelpers.gameHasStarted &&
       (scoreCounter(board, 'player') >= 12 || scoreCounter(board, 'computer') >= 12)) {

            setGameHelpers({...gameHelpers, gameHasStarted: false})
            
            if(scoreCounter(board, 'player') >= 12) {
                alert('The computer won :(');
            }

            if(scoreCounter(board, 'player') >= 12) {
                alert('You won :)');
            }

       }


    return (
        <div id="scores">
            <h2>Scores</h2>

            <div id="points-box">
                
            <div>
                <p>
                    {
                        (gameHasStarted) 
                        ? scoreCounter(board, 'computer')
                        : '0'
                    }
                </p>
                <small>You</small>
            </div>

            <div>
                <p>
                    {
                        (gameHasStarted) 
                        ? scoreCounter(board, 'player')
                        : '0'
                    }
                </p>
                <small>Computer</small>
            </div>

            </div>


        </div>
    )
}
