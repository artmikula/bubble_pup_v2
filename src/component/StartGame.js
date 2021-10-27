import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import popSound from "../asset/popsound.wav";
import Bubble from "./Bubble";
import Timer from "./Timer";

const StartGame = ({
  setGameOver,
  pointCount,
  setPointCount,
  level,
  setLevel,
}) => {
  const [timeToGo, setTimeToGo] = useState(60);
  const boxSize = (level + 2) ** 2;
  const [bubblesToPop, setBubblesToPop] = useState(boxSize);
  const [levelChanged, setLevelChanged] = useState(false);
  const [play] = useSound(popSound);

  const bubblesArr = (level) => {
    let bubbles = [];
    for (let i = 0; i < boxSize; i++) {
      bubbles.push(Math.random() * level);
    }
    return bubbles;
  };

  // const addBubbles = () => {
  //   bubbles = [];
  //   for (let i = 0; i < boxSize; i++) {
  //     bubbles.push(Math.random());
  //   }
  // };

  const handlePop = (e) => {
    // e.target.style.display = "none";
    e.target.style.visibility = "hidden";
    play();
    setBubblesToPop(bubblesToPop - 1);
    setPointCount((pointCount += level)); //points for each click are equal to level number
  };

  if (bubblesToPop === 0 && timeToGo > 0) {
    setBubblesToPop((level + 3) ** 2);
    // console.log(bubblesToPop + ":bubbles to pop");
    setLevelChanged(true);
    // clearTimeout();
  }
  // addBubbles();

  useEffect(() => {
    console.log("USE EFFECT: level");
    // <Timer />;
    // addBubbles();
    // setGameDone(false);
    setLevelChanged(false);
    setTimeToGo(10);
  }, [level]);

  useEffect(() => {
    const countdown = setTimeout(() => {
      if (timeToGo > 0 && !levelChanged) {
        setTimeToGo(timeToGo - 1);
      } else if (levelChanged) {
        setLevel(level + 1);
      } else {
        setGameOver(true);
        setLevel(0);
        console.log("GAME OVER");
      }
    }, 1000);
  }, [timeToGo]);

  return (
    <div>
      <div id="timerDiv">
        <Timer timeToGo={timeToGo} />
      </div>
      {level === 1 ? (
        <div id="bubbleDiv">
          {bubblesArr(level).map((bubble, index) => (
            <Bubble key={index} handlePop={handlePop} style={`level${level}`} />
          ))}
        </div>
      ) : null}
      {level === 2 ? (
        <div id="bubbleDiv">
          {bubblesArr(level).map((bubble, index) => (
            <Bubble key={index} handlePop={handlePop} style={`level${level}`} />
          ))}
        </div>
      ) : null}
      {level === 3 ? (
        <div id="bubbleDiv">
          {bubblesArr(level).map((bubble, index) => (
            <Bubble key={index} handlePop={handlePop} style={`level${level}`} />
          ))}
        </div>
      ) : null}
      {level === 4 ? (
        <div id="bubbleDiv">
          {bubblesArr(level).map((bubble, index) => (
            <Bubble key={index} handlePop={handlePop} style={`level${level}`} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default StartGame;
