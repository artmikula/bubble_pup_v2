function Welcome({ setGameStarted }) {
  let StartLevel = function (e) {
    setGameStarted(true);
  };

  return (
    <div id="StartLevel">
      <button onClick={StartLevel}>
        <h1>START GAME</h1>
      </button>
    </div>
  );
}

export default Welcome;
