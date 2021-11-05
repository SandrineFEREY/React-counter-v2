import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [counter, setCounter] = useState([0]);

  return (
    <div className="container">
      <button
        className="add-counter"
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
          <Counter
            counter={counter}
            setCounter={setCounter}
            index={index}
            elem={elem}
          />
        );
      })}
    </div>
  );
}

export default App;
