const Bubble = ({ handlePop, style }) => {
  return (
    <div className={style}>
      <div onClick={handlePop}></div>
    </div>
  );
};

export default Bubble;
