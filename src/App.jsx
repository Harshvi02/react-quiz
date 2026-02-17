import Header from "./components/Header";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import { useQuiz } from "./contexts/useQuiz.js";
import Loader from "./components/Loader.jsx";

function App() {
  const { state } = useQuiz();

  return (
    <div className="app">
      <Header />
 <Main>
  {state.status === "loading" && <Loader />}
  {state.status === "ready" && <StartScreen />}
</Main>

 </div>
  );
}

export default App;
