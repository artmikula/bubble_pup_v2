import "./App.css";
import React, { useState } from "react";
import Game from "./component/Game";
import Welcome from "./component/Welcome";
import GameOver from "./component/GameOver";
import HighScores from "./component/HighScores";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [pointCount, setPointCount] = useState(0);
  const [gameOver, setGameOver] = useState();

  return (
    <div id="mainDiv">
      <HighScores />
      {!gameStarted && !gameOver && (
        <Welcome
          gameStarted={gameStarted}
          setGameStarted={setGameStarted}
          gameOver={gameOver}
        />
      )}
      {gameStarted && !gameOver && (
        <Game
          pointCount={pointCount}
          setPointCount={setPointCount}
          setGameOver={setGameOver}
          gameOver={gameOver}
        />
      )}
      {gameOver && (
        <GameOver
          pointCount={pointCount}
          setPointCount={setPointCount}
          setGameStarted={setGameStarted}
          setGameOver={setGameOver}
        />
      )}
    </div>
  );
}

export default App;
