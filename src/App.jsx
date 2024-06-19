import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  if (counter < 0) {
    setCounter(0);
  }
  if (counter > 20) {
    setCounter(20);
  }
  /*react interview Question on counter?

  */

  return (
    <>
      <h1>Basic Counter</h1>
      <h1>Counter = {counter}</h1>
      <div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Add
        </button>
        <br />
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
