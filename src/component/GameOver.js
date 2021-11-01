function GameOver({ pointCount, setGameStarted, setGameOver, setPointCount }) {
  let startGame = function (e) {
    setGameStarted(false);
    setGameOver(null);
    setPointCount(0);
  };

  return (
    <div id="gameOver">
      <h1>GAME OVER</h1>
      <h1>{pointCount} POINTS</h1>
      <button onClick={startGame}>
        <h1>RESTART GAME</h1>
      </button>
      <button>
        <h1>SAVE SCORE</h1>
        <input id="nickInput" placeholder="ENTER NICKNAME"></input>
      </button>
    </div>
  );
}

export default GameOver;
