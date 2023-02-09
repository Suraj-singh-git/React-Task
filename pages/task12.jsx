import axios from "axios";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

function task12() {
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState([]);
  function handleProductFetch() {
    axios.get(`https://fakestoreapi.com/products/${count}`).then((product) => {
      const temp = [...products, product.data];
      setProducts(temp);
      setCount(count + 1);
    });
  }
  function deleteProduct(id) {
    const temp = products.filter((product, productId) => productId != id);
    setProducts(temp);
  }
  return (
    <>
      <div>
        <Navbar />
        <button className="btn btn-primary" onClick={handleProductFetch}>
          Fetch
        </button>
        <button className="btn btn-info">Fetch All</button>
        {products &&
          products.map((product) => {
            return (
              <div
                key={product.id}
                className="card"
                onClick={() => deleteProduct(product.id)}
              >
                <img
                  src={product.image}
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                />
                <p>{product.title}</p>
                <p>Price : {product.price}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default task12;
