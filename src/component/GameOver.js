function GameOver({
  pointCount,
  setGameStarted,
  setGameOver,
  setPointCount,
  setNickname,
  writeUserData,
}) {
  let StartLevel = function (e) {
    setGameStarted(false);
    setGameOver(null);
    setPointCount(0);
  };

  return (
    <div id="gameOver">
      <h1>GAME OVER</h1>
      <h1>{pointCount} POINTS</h1>
      <button onClick={StartLevel}>
        <h1>RESTART GAME</h1>
      </button>
      <br></br>
      <br></br>
      <input
        type="text"
        name="newNick"
        id="nickInput"
        placeholder="YOUR NAME"
        onChange={(e) => setNickname(e.target.value)}
      />
      <br></br>
      <button onClick={writeUserData}>
        <h1>SAVE SCORE</h1>
      </button>
    </div>
  );
}

export default GameOver;
