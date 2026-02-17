import { useQuiz } from "../contexts/useQuiz.js";

function NextButton() {
  const { state, dispatch } = useQuiz();

  if (state.answer === null) return null;

  const isLastQuestion =
    state.index === state.questions.length - 1;

  if (isLastQuestion) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
