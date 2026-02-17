import Options from "./Options.jsx";
import { useQuiz } from "../contexts/useQuiz.js";

function Question() {
  const { state } = useQuiz();
const question = state.questions[state.index];

  return (
    <div>
     <h4>{question.question}</h4>
     
     <Options question={question} />
    </div>
  );
}

export default Question;
