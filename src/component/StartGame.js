import React, { useEffect } from "react";
import Bubble from "./Bubble";
import Timer from "./Timer";

const StartGame = ({
  setGameDone,
  setTimeToGo,
  level,
  bubbles,
  boxSize,
  handlePop,
  timeToGo,
  setGameOver,
  levelChanged,
}) => {
  const addBubbles = () => {
    bubbles = [];
    for (let i = 0; i < boxSize; i++) {
      bubbles.push(<Bubble handlePop={handlePop} />);
    }
  };

  addBubbles();

  useEffect(() => {
    // <Timer />;
    addBubbles();
    let bubbleDiv = document.querySelectorAll(".gameBox");
    setGameDone(false);

    switch (level) {
      case 2:
        for (let i = 0; i < bubbleDiv.length; i++) {
          bubbleDiv[i].style.height = "90px";
          bubbleDiv[i].style.width = "90px";
          bubbleDiv[i].firstChild.style.display = "initial";
          bubbleDiv[i].firstChild.style.height = "80px";
          bubbleDiv[i].firstChild.style.width = "80px";
        }
        break;
      case 3:
        for (let i = 0; i < bubbleDiv.length; i++) {
          bubbleDiv[i].style.height = "72px";
          bubbleDiv[i].style.width = "72px";
          bubbleDiv[i].firstChild.style.display = "initial";
          bubbleDiv[i].firstChild.style.height = "64px";
          bubbleDiv[i].firstChild.style.width = "64px";
        }
        break;
      case 4:
        for (let i = 0; i < bubbleDiv.length; i++) {
          bubbleDiv[i].style.height = "60px";
          bubbleDiv[i].style.width = "60px";
          bubbleDiv[i].firstChild.style.display = "initial";
          bubbleDiv[i].firstChild.style.height = "50px";
          bubbleDiv[i].firstChild.style.width = "50px";
        }
        break;
      default:
    }
  }, [level]);

  return (
    <div>
      <div id="timerDiv">
        <Timer
          timeToGo={timeToGo}
          setTimeToGo={setTimeToGo}
          setGameOver={setGameOver}
          levelChanged={levelChanged}
        />
      </div>
      <div id="bubbleDiv">{bubbles}</div>
    </div>
  );
};

export default StartGame;
