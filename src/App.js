import "./App.css";
import React, { useState, useEffect } from "react";
import Game from "./component/Game";
import Welcome from "./component/Welcome";
import GameOver from "./component/GameOver";
import HighScores from "./component/HighScores";
import db from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [pointCount, setPointCount] = useState(0);
  const [gameOver, setGameOver] = useState("");
  const [scores, setScores] = useState([]);
  const [nickname, setNickname] = useState("");

  useEffect(async () => {
    const res = await getScores();
    setScores(res);
  }, [scores]);

  async function writeUserData() {
    const docRef = await addDoc(collection(db, "scores"), {
      nickname: nickname,
      score: pointCount,
    });
    console.log("document written with ID: ", docRef.id);
  }

  async function getScores() {
    const allScores = collection(db, "scores");
    const topScores = query(allScores, orderBy("score", "desc"), limit(3));
    const scoreSnapshot = await getDocs(topScores);
    const scoreList = scoreSnapshot.docs.map((doc) => doc.data());
    return scoreList;
  }

  return (
    <div id="mainDiv">
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
        <div>
          <GameOver
            pointCount={pointCount}
            setPointCount={setPointCount}
            setGameStarted={setGameStarted}
            setGameOver={setGameOver}
            setNickname={setNickname}
            writeUserData={writeUserData}
          />
          <HighScores
            scores={scores}
            setNickname={setNickname}
            nickname={nickname}
            writeUserData={writeUserData}
          />
        </div>
      )}
    </div>
  );
}

export default App;
