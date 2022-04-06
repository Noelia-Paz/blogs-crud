import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

//componentes
import Home from "./components/Home/Home";
import DetallesBlog from "./components/DetallesBlog/DetallesBlog";
import EditarBlog from "./components/EditarBlog/EditarBlog";
import InsertarBlog from "./components/InsertarBlog/InsertarBlog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalles" element={<DetallesBlog />} />
        <Route path="/editar" element={<EditarBlog />} />
        <Route path="/insertar" element={<InsertarBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
