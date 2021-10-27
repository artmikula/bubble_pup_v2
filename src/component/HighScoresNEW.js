const HIGH_SCORES = [
  {
    name: "NICKNAME 1",
    score: 185,
  },
  {
    name: "NICKNAME 2",
    score: 7382,
  },
  {
    name: "NICKNAME 3",
    score: 3278,
  },
  {
    name: "NICKNAME 4",
    score: 4832,
  },
  {
    name: "NICKNAME 5",
    score: 66,
  },
  {
    name: "SCOTT",
    score: 99999,
  },
];

function HighScores() {
  return (
    <div id="scoreBoard">
      <h3>HIGH SCORES</h3>
      <ol>
        {HIGH_SCORES.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
            <p>{item.score}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default HighScores;
