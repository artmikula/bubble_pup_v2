function HighScores({ scores }) {
  return (
    <div id="scoreBoard">
      <h2>HIGH SCORES</h2>
      <ol>
        {scores.slice(0, 3).map((item, index) => (
          <li key={index}>
            <p>{item.nickname}</p>
            <h1>{item.score} points</h1>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default HighScores;
