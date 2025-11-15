import React, { useEffect, useState } from "react";
import "../styles/PageStyles.css";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const p = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      name: `Product ${i + 1}`,
      price: `${1000 + i * 120} INR`,
      image: `https://picsum.photos/400/30${i}`,
    }));
    setProducts(p);
  }, []);

  return (
    <div className="page">
      <h1>Products</h1>
      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
