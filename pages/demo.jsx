import React from "react";
import Navbar from "../components/Navbar";

function demo() {
  return (
    <>
      <Navbar />
      <div>
        <div className="card">
          <img src="https://http.cat/404.jpg" />
          <h1>React Card</h1>
          <h3>your main THA is to make meme cards</h3>
        </div>
      </div>
    </>
  );
}

export default demo;
