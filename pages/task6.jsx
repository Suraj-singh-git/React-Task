import React, { useState } from "react";
import Navbar from "../components/Navbar";

function task6() {
  const [hide, setHide] = useState(false);
  return (
    <div>
      <Navbar />
      <button
        className="btn"
        onClick={() => {
          console.log(hide);
          setHide(!hide);
        }}
      >
        {/* {hide == false ? "Hide" : "Show"} */}
        {hide ? "Show" : "Hide"}
      </button>
      {!hide && <p>demo</p>}
    </div>
  );
}

export default task6;
