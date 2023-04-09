import { useState } from "react";
import "./App.css";
import Select from "./components/Select";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Select/>
    </>
  );
}

export default App;
