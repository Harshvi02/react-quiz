import { useQuiz } from "../contexts/useQuiz.js";

function FinishScreen() {
  const { state, dispatch } = useQuiz();

  const totalPoints = state.questions.reduce(
    (sum, question) => sum + question.points,
    0
  );

  const percentage = Math.round(
    (state.points / totalPoints) * 100
  );

  let emoji;

  if (percentage === 100) emoji = "🥇";
  else if (percentage >= 80) emoji = "🎉";
  else if (percentage >= 50) emoji = "🙃";
  else if (percentage > 0) emoji = "🤨";
  else emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>{" "}
        You scored <strong>{state.points}</strong> out of{" "}
        {totalPoints} ({percentage}%)
      </p>

      <p className="highscore">
        Highscore: {state.highscore} points
      </p>

      <button
        className="btn btn-ui"
       onClick={() => dispatch({ type: "restart" })}

      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
