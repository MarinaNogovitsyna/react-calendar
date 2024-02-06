import "./App.css";
import Calendar from "./Calendar";

function App() {
  const now = new Date();

  return <Calendar now={now} />;
}

export default App;
