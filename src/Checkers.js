import React, { useState } from 'react';
import {Board} from './components/board/Board';
import { BoardContext } from './components/context/BoardContext';
import { GameContext } from './components/context/GameContext';
import { MovementsContext } from './components/context/MovementsContext';
import { createBoard } from './helpers/createBoard';

export const Checkers = () => {

  const [board, setBoard] = useState(createBoard());
  const [isPieceSelected, setIsPieceSelected] = useState(false);
  const [gameHasStarted, setGameHasStarted] = useState(false);
  
  return (
    <main>
      <h1>Checkers Game</h1>

      <BoardContext.Provider value={{board, setBoard}}>
        <MovementsContext.Provider value={{isPieceSelected, setIsPieceSelected}}>
          <GameContext.Provider value={{gameHasStarted, setGameHasStarted}}>
            <Board />
          </GameContext.Provider>
        </MovementsContext.Provider>
      </BoardContext.Provider>

    </main>
  )
}
