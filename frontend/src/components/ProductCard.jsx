import React from 'react';
import { Link } from 'react-router-dom';
export default function ProductCard({p}){
  return (
    <div className="card">
      {p.images && p.images[0] && <img src={`http://localhost:5000${p.images[0]}`} alt="thumb" />}
      <h3>{p.title}</h3>
      <p>₹{p.price}</p>
      <Link to={`/product/${p.id}`}>View</Link>
    </div>
  );
}
