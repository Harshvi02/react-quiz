import Header from "./components/Header";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import { useQuiz } from "./contexts/useQuiz.js";
import Loader from "./components/Loader.jsx";
import Question from "./components/Question.jsx";
import NextButton from "./components/NextButton.jsx";
import FinishScreen from "./components/FinishScreen.jsx";
import Progress from "./components/Progress.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  const { state } = useQuiz();

  return (
    <div className="app">
      <Header />
 <Main>
  {state.status === "loading" && <Loader />}
  {state.status === "ready" && <StartScreen />}

  {state.status === "active" && (
    <>
      <Progress />
      <Question />
      <Footer>
       <NextButton />
       </Footer>

    </>
  )}
  {state.status === "finished" && <FinishScreen />}

</Main>


 </div>
  );
}

export default App;
