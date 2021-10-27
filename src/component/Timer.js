function Timer({ timeToGo, setTimeToGo, setGameOver, levelChanged, setLevel }) {
  if (timeToGo > 0 && !levelChanged) {
    setTimeout(() => setTimeToGo(timeToGo - 1), 1000);
  } else if (levelChanged) {
    // clearTimeout();
    // setTimeToGo(10);
  } else {
    setGameOver(true);
    setLevel(0);
    console.log("GAME OVER");
  }

  return (
    <div className="Timer">
      <h2>TIME: {timeToGo}</h2>
    </div>
  );
}

export default Timer;
