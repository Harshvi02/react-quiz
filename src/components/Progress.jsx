import { useQuiz } from "../contexts/useQuiz.js";

function Progress() {
  const { state } = useQuiz();

  const numQuestions = state.questions.length;

  const maxPoints = state.questions.reduce(
    (total, question) => total + question.points,
    0
  );

  return (
    <header className="progress">

      <progress
        max={numQuestions}
        value={state.index + Number(state.answer !== null)}
      />

      <p>
        Question <strong>{state.index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{state.points}</strong> / {maxPoints}
      </p>

    </header>
  );
}

export default Progress;
