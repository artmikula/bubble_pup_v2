import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import useSound from "use-sound";
import popSound from "../src/popsound.wav";
import Timer from "./Timer";

function App() {
  const [style, setStyle] = useState(0);
  const [count, setCount] = useState(9);
  // const [toPop, setToPop] = useState(10);

  return (
    <div className="App">
      <header className="App-header">
        <img
          id="bubble"
          style={{ "pointer-events": "all", border: "0" }}
          onClick={() => {
            Adding(count, setCount);
            // changeStyle(style, setStyle);
            setStyle(1);
          }}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p>{count} POINTS</p>
      </header>
    </div>
  );
  // function changeStyle(style, setStyle) {
  //   setStyle(1);
  //   console.log(style);
  // }
}

function Game() {
  const bubbles = [];
  const [play] = useSound(popSound);
  const initialCount = 9;
  // const [number, setNumber] = 9;
  const [bubblesNumber, setBubblesNumber] = useState(initialCount);
  const testing = function (e) {
    e.target.style.display = "none";
    play();
    // setNumber -- 1;
    // if (number === 0) {
    //   setBubblesNumber((bubblesNumber += bubblesNumber));
    //   Game();
    // }
  };

  for (let i = 0; i < bubblesNumber; i++) {
    bubbles.push(
      <div id="gameBox">
        <div className="bubble" onClick={testing}></div>
      </div>,
    );
  }
  return (
    <div id="bubbleDiv">
      <Timer startCount="10" />
      {bubbles}
    </div>
  );
}

function Adding(count, setCount) {
  if (count < 10) {
    setCount(count + 1);
  } else if (count >= 10 && count < 20) {
    setCount(count + 2);
  } else if (count >= 20 && count < 100) {
    setCount(count + 7);
  } else if (count >= 100) {
    setCount(count + 21);
  }
}

// export default App;
export default Game;
