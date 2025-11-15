import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav-container">
      <h2 className="brand">OnlineShop</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
        <Link to="/add-product">Add Product</Link>
        <Link to="/register">Register</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
