import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="page-container">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <h3>{p.name}</h3>
            <p>Price: ₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
