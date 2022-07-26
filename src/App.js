import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import NavBar from "layout/NavBar";
import Footer from "layout/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
