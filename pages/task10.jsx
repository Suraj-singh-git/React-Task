import React, { useState } from "react";

function task10() {
  const [items, setItems] = useState("");

  async function FetchData() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");

    // const resp = await fetch("/api/hello");
    const data = await resp.json();
    console.log(data);
    setItems(data.items);
  }
  return (
    <div>
      <button onClick={FetchData}>fetch</button>
      {/* <p>{console.log(items)}</p> */}
    </div>
  );
}

export default task10;
