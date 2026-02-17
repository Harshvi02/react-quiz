import { createContext, useReducer, useEffect } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  secondsRemaining: null,   
};

function reducer(state, action) {
  switch (action.type) {

    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "start":
  return {
    ...state,
    status: "active",
    secondsRemaining: state.questions.length * 30,
  };


   case "newAnswer": {
  const question = state.questions[state.index];

  return {
    ...state,
    answer: action.payload,
    points:
      action.payload === question.correctOption
        ? state.points + question.points
        : state.points,
  };
}

case "nextQuestion":
  return {
    ...state,
    index: state.index + 1,
    answer: null,
  };
  case "finish":
      return {
        ...state,
        status: "finished",
      };
      case "tick":
  return {
    ...state,
    secondsRemaining: state.secondsRemaining - 1,
    status:
      state.secondsRemaining === 1
        ? "finished"
        : state.status,
  };


    default:
      return state;
  }
}
  


function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  
 useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "dataReceived", payload: data })
      );
  }, []);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export { QuizProvider, QuizContext };


