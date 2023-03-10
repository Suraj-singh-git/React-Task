import React, { useState } from "react";
import Navbar from "../components/Navbar";

function task7() {
  const [type, setType] = useState(true);
  const [text, setText] = useState("");
  return (
    <div>
      <Navbar />
      {type == true ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <input
          type="password"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}
      <button onClick={() => setType(!type)}>View</button>
      <p>{text}</p>
    </div>
  );
}

export default task7;
