import { useQuiz } from "../contexts/useQuiz.js";
import { useEffect } from "react";

function Timer() {
  const { state, dispatch } = useQuiz();

  const totalSeconds = Math.max(0, state.secondsRemaining);

  const mins = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;


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
