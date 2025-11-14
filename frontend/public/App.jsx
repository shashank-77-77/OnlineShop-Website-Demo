import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./Home";  
import Login from "./Login";  
import Register from "./Register";
import AddProduct from "./AddProduct";
import ProductPage from "./ProductPage"; // if exists

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product" element={<ProductPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}
