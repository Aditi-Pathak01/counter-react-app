import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [initial, final] = useState(0);
  if (initial < 0) {
    final(0);
  }
  if (initial > 20) {
    final(20);
  }

  return (
    <>
      <h1>Counter = {initial}</h1>
      <button
        onClick={() => {
          final(initial + 1);
        }}
      >
        Add
      </button>
      <br />
      <button
        onClick={() => {
          final(initial - 1);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          final(0);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;
