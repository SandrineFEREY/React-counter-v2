import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState([0]);

  return (
    <div className="container">
      <button
        onClick={() => {
          if (counter.length < 3) {
            const newCounter = [...counter];
            newCounter.push(0);
            setCounter(newCounter);
          }
        }}
      >
        Add counter
      </button>

      {counter.map((elem, index) => {
        return (
          <div>
            <div>
              <button
                onClick={() => {
                  const newCounter = [...counter];
                  newCounter[index] = newCounter[index] - 1; //ou newCounter[index]--
                  setCounter(newCounter);
                }}
              >
                -
              </button>

              <span>{elem}</span>

              <button
                onClick={() => {
                  const newCounter = [...counter];
                  newCounter[index]++;
                  setCounter(newCounter);
                }}
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                const newCounter = [...counter];
                newCounter[index] = 0;
                setCounter(newCounter);
              }}
            >
              Reset
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
