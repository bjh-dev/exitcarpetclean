import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  function increment() {
    setCount(count + 1);
    console.log("increment counter");
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
      console.log("decrement counter");
    }
  }
  return (
    <div className="flex">
      <button
        className="mx-4 rounded-md bg-gray-200 px-4 py-2"
        onClick={decrement}
      >
        Subtract
      </button>
      <div className="px-6 py-2 text-lg">{count}</div>
      <button
        className="mx-4 rounded-md bg-gray-200 px-4 py-2"
        onClick={increment}
      >
        Add
      </button>
    </div>
  );
};

export default Counter;
