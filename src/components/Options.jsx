import { useQuiz } from "../contexts/useQuiz.js";

function Options({ question }) {
  const { state, dispatch } = useQuiz();

  const hasAnswered = state.answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option
  ${index === state.answer ? "answer" : ""}
  ${hasAnswered
    ? index === question.correctOption
      ? "correct"
      : index === state.answer
      ? "wrong"
      : ""
    : ""
  }`}

          key={option}
          disabled={hasAnswered}
          onClick={() =>
            dispatch({ type: "newAnswer", payload: index })
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
