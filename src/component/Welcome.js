function Welcome({ setGameStarted }) {
  let startGame = function (e) {
    setGameStarted(true);
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
