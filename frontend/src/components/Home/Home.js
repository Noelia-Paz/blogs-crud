import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./home.css";

//componentes
import BlogCard from "../BlogCard/BlogCard";

function Home() {
  let navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`/api/blog`).then((res) => {
      const blogsDB = res.data;
      setBlogs(blogsDB);
    });
  }, []);

  const deleteBtn = (blogId) => {
    const filteredBlogs = blogs.filter((blog) => blog.id !== blogId);
    setBlogs(filteredBlogs);
  };

  return (
    <div className="contenedor">
      <h1 className="textoHeader">Bienvenido a mi aplicacion</h1>
      <div className="boton1">
        <button
          onClick={() => {
            navigate("/insertar");
          }}
          className="botonInsertar"
        >
          <h2 className="textoBoton">Insertar Nuevo Blog</h2>
        </button>
      </div>
      <div className="cards">
        {blogs.map((blog) => {
          return <BlogCard blog={blog} key={blog.id} deleteBtn={deleteBtn} />;
        })}
      </div>
      <footer className="pie">
        <h5 className="texto-pie">Pagina React Css 2022</h5>
      </footer>
    </div>
  );
}

export default Home;
