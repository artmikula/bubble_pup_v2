import React, { useState } from "react";
import useSound from "use-sound";
import popSound from "../asset/popsound.wav";
import StartGame from "./StartGame";

function Game({
  level,
  setLevel,
  showBubbles,
  pointCount,
  setPointCount,
  setGameOver,
}) {
  const [timeToGo, setTimeToGo] = useState(10);
  const boxSize = (level + 2) ** 2;
  const [bubblesToPop, setBubblesToPop] = useState(boxSize);
  const [play] = useSound(popSound);
  const [gameDone, setGameDone] = useState(false);
  const [levelChanged, setLevelChanged] = useState();
  let bubbles = [];

  const handlePop = (e) => {
    e.target.style.display = "none";
    play();
    setBubblesToPop(bubblesToPop - 1);
    setPointCount((pointCount += level)); //points for each click are equal to level number
  };

  if (bubblesToPop === 0 && timeToGo > 0) {
    // setGameDone(true);
    // console.log(gameDone);
    setLevel(level + 1);
    setBubblesToPop((level + 3) ** 2);
    // console.log(bubblesToPop + ":bubbles to pop");
    // setLevelChanged(true);
    // clearTimeout();
    setTimeToGo(10);
  }

  return (
    <div id="wrap">
      <h3>LEVEL {level}</h3>
      <h1>POINTS: {pointCount}</h1>
      <StartGame
        setGameDone={setGameDone}
        setLevel={setLevel}
        setTimeToGo={setTimeToGo}
        gameDone={gameDone}
        bubblesToPop={bubblesToPop}
        timeToGo={timeToGo}
        level={level}
        boxSize={boxSize}
        handlePop={handlePop}
        bubbles={bubbles}
        showBubbles={showBubbles}
        setGameOver={setGameOver}
      />
    </div>
  );
}
export default Game;
