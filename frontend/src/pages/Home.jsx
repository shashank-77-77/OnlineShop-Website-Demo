import React, { useEffect, useState } from "react";
import API from "../api";  
import ProductCard from "../components/ProductCard.jsx"; 

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then((r) => setProducts(r.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Product Catalog</h1>

      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}
