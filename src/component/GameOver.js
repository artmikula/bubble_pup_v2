function GameOver({ pointCount }) {
  return (
    <div id="gameOver">
      <h1>GAME OVER</h1>
      <h1>{pointCount} POINTS</h1>
      <button>
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
