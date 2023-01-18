import React, { useState } from "react";
import Navbar from "../components/Navbar";

function task10() {
  const [items, setItems] = useState([]);

  async function FetchData() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");

    // const resp = await fetch("/api/hello");
    const data = await resp.json();
    setItems(data);
    console.log(items);
  }
  return (
    <div>
      <Navbar />

      <section id="our-program">
        <div class="container">
          <button onClick={FetchData} class="btn btn-lg btn-info text-white">
            Fetch Data
          </button>
          <div class="top text-center">
            <h1>OUR Data</h1>
          </div>

          <div class="row">
            {items.map((item) => (
              <div class="col-md-4">
                <div class="card10">
                  <div class="card-img-top">
                    <button class=" btn btn-lg btn-primary">{item.id}</button>
                  </div>
                  <div class="card-block">
                    <h4 class="card-title">{item.title}</h4>
                    <p class="card-text">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default task10;
