import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">OnlineShop</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add-product">Add Product</Link>
        <Link to="/login" className="btn-login">Login</Link>
        <Link to="/register" className="btn-register">Register</Link>
      </div>
    </nav>
  );
}
