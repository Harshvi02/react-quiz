import { useQuiz } from "../contexts/useQuiz.js";

function FinishScreen() {
  const { state } = useQuiz();

  return (
    <>
      <p className="result">
        You scored <strong>{state.points}</strong> points
      </p>

      <button
        className="btn btn-ui"
        onClick={() => window.location.reload()}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
