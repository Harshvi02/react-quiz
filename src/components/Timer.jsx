import { useQuiz } from "../contexts/useQuiz.js";
import { useEffect } from "react";

function Timer() {
  const { state, dispatch } = useQuiz();

  const mins = Math.floor(state.secondsRemaining / 60);
  const seconds = state.secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
