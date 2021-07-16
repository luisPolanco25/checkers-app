import React, { useState } from 'react';
import {Board} from './components/board/Board';
import { BoardContext } from './components/context/BoardContext';
import { GameContext } from './components/context/GameContext';
import { Scores } from './components/scores/Scores';
import { createBoard } from './helpers/createBoard';
import { scoreCounter } from './helpers/scoreCounter';

export const Checkers = () => {

  const [board, setBoard] = useState(createBoard());
  const [gameHelpers, setGameHelpers] = useState({
    gameHasStarted: false,
    isPieceSelected: false,
    selectedPiecePosition: null,
    isComputerTurn: false,
  });

  return (
    <main>
      <h1>
        {
          (!gameHelpers.gameHasStarted)
          ? 'Checkers Game'
          : (gameHelpers.gameHasStarted && !gameHelpers.isComputerTurn)
          ? 'Your turn'
          : 'Computer\'s turn'
        }
      </h1>

      <BoardContext.Provider value={{board, setBoard}}>
          <GameContext.Provider value={{gameHelpers, setGameHelpers}}>
            <Board />

            {
              (gameHelpers.gameHasStarted) 
              && <Scores />
            }

          </GameContext.Provider>
      </BoardContext.Provider>

    </main>
  )
}
