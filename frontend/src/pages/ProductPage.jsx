import React, { useEffect, useState, useCallback } from "react";
import "../ProductPage.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // -----------------------------
  // Auto Product Loader
  // -----------------------------
  const autoLoadProducts = useCallback(() => {
    setLoading(true);

    const newProducts = Array.from({ length: 6 }).map((_, i) => ({
      id: (page - 1) * 6 + i + 1,
      name: `Product ${(page - 1) * 6 + i + 1}`,
      price: `${(Math.random() * 5000 + 500).toFixed(0)} INR`,
      image: `https://picsum.photos/seed/${page * i + 1}/400/400`
    }));

    setTimeout(() => {
      setProducts((prev) => [...prev, ...newProducts]);
      setLoading(false);
    }, 700);
  }, [page]);

  // -----------------------------
  // Scroll Tracker
  // -----------------------------
  const trackScroll = useCallback(() => {
    if (loading) return;

    const bottomOffset = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;

    if (bottomOffset >= pageHeight - 200) {
      setPage((prev) => prev + 1);
    }
  }, [loading]);

  // -----------------------------
  // Lifecycle Management
  // -----------------------------
  useEffect(() => {
    autoLoadProducts();
  }, [page, autoLoadProducts]);

  useEffect(() => {
    window.addEventListener("scroll", trackScroll);
    return () => window.removeEventListener("scroll", trackScroll);
  }, [trackScroll]);

  return (
    <div className="product-page">
      <div className="parallax-banner">
        <h1>Explore Premium Products</h1>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p className="price">{product.price}</p>
            <button className="btn-buy">View Details</button>
          </div>
        ))}
      </div>

      {loading && <div className="loading-indicator">Loading more items…</div>}
    </div>
  );
};

export default ProductPage;
