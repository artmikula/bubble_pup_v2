import React, { useState } from "react";
import StartLevel from "./StartLevel";

function Game({ pointCount, setPointCount, setGameOver, levelUp, setLevelUp }) {
  const [level, setLevel] = useState(1);

  return (
    <div id="wrap">
      <h3>LEVEL {level}</h3>
      <h1>POINTS: {pointCount}</h1>
      <StartLevel
        pointCount={pointCount}
        setPointCount={setPointCount}
        level={level}
        setLevel={setLevel}
        setGameOver={setGameOver}
        levelUp={levelUp}
        setLevelUp={setLevelUp}
      />
    </div>
  );
}
export default Game;
