import React from "react";

export default function ProductCard({ p }) {
  return (
    <div className="product-card">
      <img src={p.image} alt={p.title} className="thumb" />

      <h2>{p.title}</h2>

      <p className="price">{p.price} INR</p>

      <p className="desc">
        {p.description?.slice(0, 60)}...
      </p>

      <button className="btn-buy">View Details</button>
    </div>
  );
}
