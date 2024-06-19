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
whar if setCounter (counter+1) is added again n again!
  */

  return (
    <>
      <h1>Basic Counter</h1>
      <h1>Counter = {counter}</h1>
      <div>
        <button
          onClick={() => {
            setCounter(counter + 1);

            /* case-1 :- 
            setCounter (counter+1) 
            setCounter (counter+1) 
            setCounter (counter+1) //what will be the output? 
            =>output will be increment of 1 only! because usestate updates are sent in batches.
            case-2 :- 
            setCounter(counter + 1);
            setCounter(prevC => prevC+1)
            setCounter(prevC => prevC+1) //what will be the output? 
            => output will be increment of 3 as prevC stores the old value!
            */
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
