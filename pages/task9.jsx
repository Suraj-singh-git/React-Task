import React, { useState } from "react";
import Navbar from "../components/Navbar";

function task9() {
  const [name, setName] = useState("");
  async function handleFetch() {
    const resp = await fetch("/api/hello");
    const data = await resp.json();
    setName(data.name);
  }
  return (
    <div>
      <Navbar />
      <button onClick={handleFetch}>fetch</button>
      <p>Name:{name}</p>
    </div>
  );
}

export default task9;
