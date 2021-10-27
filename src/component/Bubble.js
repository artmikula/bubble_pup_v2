const Bubble = ({ handlePop }) => {
  return (
    <div className="gameBox">
      <div className="bubble" onClick={handlePop}></div>
    </div>
  );
};

export default Bubble;
