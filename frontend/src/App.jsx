import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';

export default function App(){
  return (
    <div>
      <header className="nav">
        <Link to="/">Home</Link>
        <Link to="/add">Add Item</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/add" element={<AddProduct/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </main>
    </div>
  );
}
