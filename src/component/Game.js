import React, { useState } from "react";
import StartGame from "./StartGame";

function Game({ pointCount, setPointCount, setGameOver }) {
  const [level, setLevel] = useState(1);

  return (
    <div id="wrap">
      <h3>LEVEL {level}</h3>
      <h1>POINTS: {pointCount}</h1>
      <StartGame
        pointCount={pointCount}
        setPointCount={setPointCount}
        level={level}
        setLevel={setLevel}
        setGameOver={setGameOver}
      />
    </div>
  );
}
export default Game;
