import React, { useState } from "react";

function task9() {
  const [name, setName] = useState("");
  async function handleFetch() {
    const resp = await fetch("/api/hello");
    const data = await resp.json();
    setName(data.name);
  }
  return (
    <div>
      <button onClick={handleFetch}>fetch</button>
      <p>Name:{name}</p>
    </div>
  );
}

export default task9;
