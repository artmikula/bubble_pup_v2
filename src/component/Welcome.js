function Welcome({ level, setLevel, gameOver }) {
  let startGame = function (e) {
    setLevel(1);
  };

  return (
    <div id="startGame">
      <button onClick={startGame}>
        <h1>START GAME</h1>
      </button>
    </div>
  );
}

export default Welcome;
