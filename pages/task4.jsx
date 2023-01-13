import React, { useState } from "react";

function task4() {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

function Counter() {
  const [no, setNo] = useState(0);
  return (
    <div className="counter-box">
      <h1>Hello - {no}</h1>
      <button
        className="btn"
        disabled={no == 10} //Method 1 : disabled button when number is greater than 10;
        onClick={() => {
          setNo(no + 1);
        }}
      >
        Add
      </button>
      <button
        className="btn"
        onClick={() => {
          no && setNo(no - 1); //Method 2 : disabled button when number is less than 0;
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default task4;
