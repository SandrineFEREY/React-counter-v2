const Counter = ({ counter, setCounter, index, elem }) => {
  return (
    <div>
      <div className="block">
        <button
          onClick={() => {
            const newCounter = [...counter];
            newCounter[index] = newCounter[index] - 1; //ou newCounter[index]--
            setCounter(newCounter);
          }}
        >
          -
        </button>

        <p>{elem}</p>

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
        className="reset"
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
};

export default Counter;
