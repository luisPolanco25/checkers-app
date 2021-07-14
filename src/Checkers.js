import React, { useState } from 'react';
import {Board} from './components/board/Board';
import { GameContext } from './components/gameContext/GameContext';

export const Checkers = () => {

  const [gameHasStarted, setGameHasStarted] = useState(false);
  
  return (
    <main>
      <h1>Checkers Game</h1>
      
      <GameContext.Provider value={{gameHasStarted, setGameHasStarted}}>
        <Board />
      </GameContext.Provider>

    </main>
  )
}
