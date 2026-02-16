function FinishScreen() {
  return (
    <>
      <p className="result">
        <span>🎉</span>
        You scored <strong>0</strong> out of 280 (0%)
      </p>

      <p className="highscore">
        (Highscore: 0 points)
      </p>

      <button className="btn btn-ui">
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
