import { useState } from "react";
import "./App.scss";
import Counts from "./components/Counts/Counts";

function App() {
  const [count, setCount] = useState(1);

  return (
    <div className="main">
      <Counts times={count} setCount={setCount} />
    </div>
  );
}

export default App;
