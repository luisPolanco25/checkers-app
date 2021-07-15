import React, { useState } from 'react';
import {Board} from './components/board/Board';
import { BoardContext } from './components/context/BoardContext';
import { GameContext } from './components/context/GameContext';
import { createBoard } from './helpers/createBoard';

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
      <h1>Checkers Game</h1>

      <BoardContext.Provider value={{board, setBoard}}>
          <GameContext.Provider value={{gameHelpers, setGameHelpers}}>
            <Board />
          </GameContext.Provider>
      </BoardContext.Provider>

    </main>
  )
}
