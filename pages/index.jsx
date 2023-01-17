import React from "react";
import { Link } from "react-router-dom";

function Index() {
  return (
    // <nav>
    //   <a href="/">Home</a>
    //   <a href="/about">About</a>
    //   <a href="#contact">Contact</a>
    // </nav>

    <nav class="navbar">
      <div class="navbar-container container1">
        <ul class="menu-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Testimonial</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Index;
