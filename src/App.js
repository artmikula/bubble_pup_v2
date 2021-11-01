import "./App.css";
import React, { useState, useEffect } from "react";
import Game from "./component/Game";
import Welcome from "./component/Welcome";
import GameOver from "./component/GameOver";
import HighScores from "./component/HighScores";
import { database } from "./firebase";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [pointCount, setPointCount] = useState(0);
  const [gameOver, setGameOver] = useState();

  const [score, setScore] = useState();
  const [nickname, setNickname] = useState();

  // const Push = () => {
  //   database
  //     .ref("user")
  //     .set({
  //       name: name,
  //       age: age,
  //     })
  //     .catch(alert);
  // };

  // const ref = firebase.firestore().collection("scores");
  // console.log(ref);

  // useEffect(() => {
  //   getScores2();
  // }, []);

  // function getScores() {
  //   setLoading(true);
  //   ref.onSnapshot((querySnapshot) => {
  //     const items = [];
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data());
  //     });
  //     setScores(items);
  //     setLoading(false);
  //   });
  // }

  // function getScores2() {
  //   setLoading(true);
  //   ref.get().then((item) => {
  //     const items = item.docs.map((doc) => doc.data());
  //     setScores(items);
  //     setLoading(false);
  //   });
  // }

  return (
    <div id="mainDiv">
      {/* <center>
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />
        <button onClick={Push}>PUSH</button>
      </center> */}
      {/* <h1>Scores</h1>
      {scores.map((score) => (
        <div key={score.id}>
          <h2>{score.nickname}</h2>
        </div>
      ))} */}
      {test}
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
