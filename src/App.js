import "./App.css";
import React, { useState } from "react";
import Game from "./component/Game";
import Welcome from "./component/Welcome";
import GameOver from "./component/GameOver";
import HighScores from "./component/HighScores";

function App() {
  const [level, setLevel] = useState();
  const [pointCount, setPointCount] = useState(0);
  const [gameOver, setGameOver] = useState();
  let showBubbles = document.querySelectorAll(".bubble");

  return (
    <div id="mainDiv">
      <HighScores />
      {!level && !gameOver && (
        <Welcome level={level} setLevel={setLevel} gameOver={gameOver} />
      )}
      {level && !gameOver && (
        <Game
          level={level}
          setLevel={setLevel}
          showBubbles={showBubbles}
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
          setLevel={setLevel}
          setGameOver={setGameOver}
        />
      )}
    </div>
  );
}

export default App;
