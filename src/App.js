import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import useSound from "use-sound";
import popSound from "../src/popsound.wav";

function App() {
  const [count, setCount] = useState(0);
  const [style, setStyle] = useState(0);

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
  const testing = function (e) {
    // let i = 0;
    e.target.style.display = "none";
    // i += i;
    console.log("test");
  };

  for (let i = 0; i < 12; i++) {
    bubbles.push(<div id="bubble" onClick={play} onClick={testing}></div>);
  }
  return <div id="bubbleDiv">{bubbles}</div>;
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
