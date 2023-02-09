import Head from "next/head";
import React, { useState, useEffect } from "react";

function task13() {
  let [num, setNum] = useState(0);
  let [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("hello");
    setCounter(counter + 1);
  }, [num]);
  function addNumber() {
    setNum(num + 1);
  }
  function delNumber() {
    setNum(num - 1);
  }
  return (
    <div>
      <Head>
        <title>{counter} clicked</title>
      </Head>
      <button onClick={addNumber}>Add</button>
      <button onClick={delNumber}>Delete</button>
      <p>{num}</p>
    </div>
  );
}

export default task13;
